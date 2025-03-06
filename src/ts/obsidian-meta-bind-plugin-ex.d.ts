import { Element } from 'obsidian';

declare global {
  const MB_DEV_BUILD: boolean;
  const MB_DEBUG: boolean;
}

declare interface HTMLElement extends Element {};

export {};
