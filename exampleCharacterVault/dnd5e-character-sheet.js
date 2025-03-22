const mb = engine.getPlugin("obsidian-meta-bind-plugin").api;
mb.mathJSImport(
  {
    // clamp a value between a min and max
    clamp: (val, min, max) =>
      Math.min(Math.max(min, val), max),

    // display a number including its sign
    sign: (num) => (num > 0 ? "+" : "") + String(num),

    // calculate a modifier from an attribute:
    calcmodifier: (attr) => Math.floor((attr - 10) / 2),
  },
  { silent: true, override: true }
);
