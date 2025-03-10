const process = require("process");
const fs = require("fs");
const { glob } = require("glob");

function encodeSVG(svg) {
  return (
    "data:image/svg+xml," +
    svg
      .replace(/%/g, "%25") // Encode %
      .replace(/#/g, "%23") // Encode #
      .replace(/{/g, "%7B") // Encode {
      .replace(/}/g, "%7D") // Encode }
      // .replace(/</g, "%3C") // Encode <
      // .replace(/>/g, "%3E") // Encode >
      .replace(/\n/g, "") // remove newlines
      .replace(/\s+/g, " ") // Minify spaces
  );
}

async function main() {
  const outputScssFile = "../../src/sass/_svgs.scss"; // Update output path

  process.chdir("assets/svg");

  if (fs.existsSync(outputScssFile)) {
    fs.unlinkSync(outputScssFile);
  }

  let svg_files = await glob(["./*.svg", "tw-dnd/icons/**/*.svg"], {
    posix: true,
  });
  for (const file of svg_files) {
    let var_name = file
      .replace("tw-dnd/icons/", "tw_")
      .replace(".svg", "")
      .replace("/", "_");
    fs.readFile(file, "utf8", (err, data) => {
      if (err) throw err;
      const encodedSVG = encodeSVG(data);
      fs.appendFile(
        outputScssFile,
        `$${var_name}: url('${encodedSVG}');\n`,
        (err) => {
          if (err) throw err;
          console.log(`generated $${var_name} from '${file}'`);
        }
      );
    });
  }
}

main();
