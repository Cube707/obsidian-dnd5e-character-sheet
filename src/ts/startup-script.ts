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
