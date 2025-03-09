import type * as Obsidian from 'obsidian';
import { IPlugin as MetaBindPlugin } from 'obsidian-meta-bind-plugin/packages/core/src/IPlugin'
import { API as MetaBindAPI } from 'obsidian-meta-bind-plugin/packages/core/src/api/API'

declare global {
  var obsidian: typeof Obsidian;
  var app: Obsidian.App;
  var component: Obsidian.Component;
  var engine: any;
  var container: HTMLElement;
}

const mb: MetaBindAPI<MetaBindPlugin> = engine.getPlugin("obsidian-meta-bind-plugin").api;

mb.mathJSimport(
  {
    // clamp a value between a min and max
    clamp: (val: number, min: number, max: number) => Math.min(Math.max(min, val), max),

    // display a number including its sign
    sign: (num: number) => (num > 0 ? "+" : "") + String(num),

    // calculate a modifier from an attribute:
    calcmodifier: (attr: number) => Math.floor((attr - 10) / 2),
  },
  { silent: true, override: true }
);
