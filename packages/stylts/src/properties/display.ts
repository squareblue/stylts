// Start with values from MDN
// https://developer.mozilla.org/en-US/docs/Web/CSS/display
// import { camelCase, kebabCase, snakeCase } from 'change-case';
import { Property } from 'csstype';

const displayValueList = [
  // empty string used to prevent { display: value } from being returned
  // '',
  // precomposed values
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'flow-root',
  // box generation
  'none',
  'contents',
  // multi-keyword syntax
  'block flex',
  'block flow',
  'block flow-root',
  'block grid',
  'inline flex',
  'inline flow',
  'inline flow-root',
  'inline grid',
  // other values
  'table',
  'table-row', /* all table elements have an equivalent CSS display value */
  'list-item',
  // Global values
  'inherit',
  'initial',
  'revert',
  'revert-layer',
  'unset',
] as const;

const displayMethods = {
  // display: 'initial' as Property.Display,
  block: 'block',
  blockFlex: 'block flex',
  blockFlow: 'block flow',
  blockFlowRoot: 'block flow-root',
  blockGrid: 'block grid',
  contents: 'contents',
  flex: 'flex',
  flowRoot: 'flow-root',
  grid: 'grid',
  inherit: 'inherit',
  initial: 'initial',
  inline: 'inline',
  inlineFlex: 'inline-flex',
  inlineFlow: 'inline flow',
  inlineFlowRoot: 'inline flow-root',
  inlineGrid: 'inline-grid',
  inlineBlock: 'inline-block',
  listItem: 'list-item',
  none: 'none',
  revert: 'revert',
  revertLayer: 'revert-layer',
  table: 'table',
  tableRow: 'table-row',
  unset: 'unset',
} as const;

type DisplayMethod = {
  [k in keyof typeof displayMethods]: typeof displayMethods[k];
};

// method name and corresponding output value
const displayProperties = [
  { name: 'block', value: 'block' },
  { name: 'blockFlex', value: 'block flex' },
  { name: 'blockFlow', value: 'block flow' },
  { name: 'blockFlowRoot', value: 'block flow-root' },
  { name: 'blockGrid', value: 'block grid' },
  { name: 'contents', value: 'contents' },
  { name: 'flex', value: 'flex' },
  { name: 'flowRoot', value: 'flow-root' },
  { name: 'grid', value: 'grid' },
  { name: 'inherit', value: 'inherit' },
  { name: 'initial', value: 'initial' },
  { name: 'inline', value: 'inline' },
  { name: 'inlineFlex', value: 'inline-flex' },
  { name: 'inlineFlow', value: 'inline flow' },
  { name: 'inlineFlowRoot', value: 'inline flow-root' },
  { name: 'inlineGrid', value: 'inline-grid' },
  { name: 'inlineBlock', value: 'inline-block' },
  { name: 'listItem', value: 'list-item' },
  { name: 'none', value: 'none' },
  { name: 'revert', value: 'revert' },
  { name: 'revertLayer', value: 'revert-layer' },
  { name: 'table', value: 'table' },
  { name: 'tableRow', value: 'table-row' },
  { name: 'unset', value: 'unset' },
] as const;

const displayStyle = {
  set: (value: Property.Display) => ({ display: value }),
  display: (value: Property.Display) => ({ display: value }),
  block: { display: 'block' },
  blockFlex: { display: 'block flex' },
  blockFlow: { display: 'block flow' },
  blockFlowRoot: { display: 'block flow-root' },
  blockGrid: { display: 'block grid' },
  contents: { display: 'contents' },
  flex: { display: 'flex' },
  flowRoot: { display: 'flow-root' },
  grid: { display: 'grid' },
  inherit: { display: 'inherit' },
  initial: { display: 'initial' },
  inline: { display: 'inline' },
  inlineFlex: { display: 'inline-flex' },
  inlineFlow: { display: 'inline flow' },
  inlineFlowRoot: { display: 'inline flow-root' },
  inlineGrid: { display: 'inline-grid' },
  inlineBlock: { display: 'inline-block' },
  listItem: { display: 'list-item' },
  none: { display: 'none' },
  revert: { display: 'revert' },
  revertLayer: { display: 'revert-layer' },
  table: { display: 'table' },
  tableRow: { display: 'table-row' },
  unset: { display: 'unset' },
} as const;

type DisplayProperty = keyof typeof displayStyle;

type DisplayProperties = {
  [k in DisplayProperty]: typeof displayStyle[k];
}

// type ValueFromArray<A> = typeof <A>[number];

type DisplayPropertyValue =
  | typeof displayValueList[number]
  | Property.Display

type DisplayReturnValue = {
  display: DisplayPropertyValue
} | {}

export class Display {
  block = { display: 'block' } as const;
  blockFlex = { display: 'block flex' } as const;
  blockFlow = { display: 'block flow' } as const;
  blockFlowRoot = { display: 'block flow-root' } as const;
  blockGrid = { display: 'block grid' } as const;
  contents = { display: 'contents' } as const;
  flex = { display: 'flex' } as const;
  flowRoot = { display: 'flow-root' } as const;
  grid = { display: 'grid' } as const;
  inherit = { display: 'inherit' } as const;
  initial = { display: 'initial' } as const;
  inline = { display: 'inline' } as const;
  inlineFlex = { display: 'inline-flex' } as const;
  inlineFlow = { display: 'inline flow' } as const;
  inlineFlowRoot = { display: 'inline flow-root' } as const;
  inlineGrid = { display: 'inline-grid' } as const;
  inlineBlock = { display: 'inline-block' } as const;
  listItem = { display: 'list-item' } as const;
  none = { display: 'none' } as const;
  revert = { display: 'revert' } as const;
  revertLayer = { display: 'revert-layer' } as const;
  table = { display: 'table' } as const;
  tableRow = { display: 'table-row' } as const;
  unset = { display: 'unset' } as const;

  empty = {};

  displayStyle: DisplayReturnValue = {};

  constructor(value?: DisplayPropertyValue) {
    this.style = value ?? '';
  }

  set style(value: DisplayPropertyValue) {
    this.displayStyle = (
      typeof value === 'string'
        ? { display: value }
        : this.empty
    );
  }

  get style(): DisplayReturnValue {
    return this.displayStyle;
  }
}

export const display = new Display();
