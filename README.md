# DnD 5e Character Sheet for Obsidian

This repo contains the source-files used to create the files needed by obsidian, both CSS and JS.


## Goal of the project

It aims to provide as easy as possible to maintain markdown while providing the
CSS styles to render it into a really nice looking character sheet.
That means the means nesting is kept to a minimum,
wherever possible, normal markdown constructs are used and
interactions with the frontmatter properties should be possible through Meta-Bind.

However, this project still makes <ins>heavy</ins> use of [Meta-Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin)
and [Markdown Attributes](https://github.com/javalent/markdown-attributes)
and knowing how to navigate them is pretty much a requirement
(even if I tried my best to make it as accessible as possible).

## The Example Vault

Under [`exampleVault/`](exampleVault/) you can find a demo obsidian vault where everything is set up and ready to use.
There you will also find a character sheet which demonstrate all the ability of this project.

To use it you have to generate the projectfiles, which will generate the files into the vault folder
and make them available. Or you download a prebuild version from the [release page](https://github.com/Cube707/obsidian-dnd5e-character-sheet/releases).
