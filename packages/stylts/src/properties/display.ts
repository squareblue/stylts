// Start with values from MDN
// https://developer.mozilla.org/en-US/docs/Web/CSS/display
// import { camelCase, kebabCase, snakeCase } from 'change-case';
import { Property } from 'csstype';

const displayValueList = [
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

// Generate new object using camelCase version of value as the property name
// export const displayValuesComputed = {
//   ...displayValueList.reduce((list, value) => {
//     Object.assign(list, {
//       [camelCase(value)]: value,
//     });
//     return list;
//   }, {}),
// } as const;

const displayValues = {
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

type DisplayValueKey = keyof typeof displayValues;

type DisplayValues = {
  [k in DisplayValueKey]: typeof displayValues[k];
};

type DisplayPropertyValue =
  | Property.Display
  | typeof displayValueList[number]

export const displayFn = (value: Property.Display) => ({
  display: value,
});

const displayProperties = {
  set: (value: Property.Display) => ({ display: value }),
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

type DisplayProperty = keyof typeof displayProperties;

type DisplayProperties = {
  [k in DisplayProperty]: typeof displayProperties[k];
}

export const display = {
  // set: displayFn,
  ...displayProperties,
}

// Add `displayValues` properties to `display()` function
// Object.assign(display, displayProperties);
// for (const [ key, value ] of Object.entries(displayProperties)) {
//   display[key] = {
//     display: value,
//   };
// }

// export const display = Object.entries(displayValues).reduce((obj, [key, value]) => {
//   obj[key] = { display: value };
//   return obj;
// }, {} as DisplayProperties);

// export const display = Object.entries(displayValues).reduce((obj, [key, value]) => {
//   obj[key] = { display: value }
//   return obj;
// }, {}) as {
//   [key: string]: Display;
// };

// export const displayProperty = '' as Property.Display;
// export type DisplayValueKey = typeof displayValueKeys[number];
