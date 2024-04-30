const displayValues = {
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
};

export const display = Object.entries(displayValues).reduce((obj, [key, value]) => {
  obj[key] = { display: value }
  return obj;
}, {});

console.log(display);

// const displayTable = display.table;
// console.log(displayTable)

const displayProperties = {
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
  unset: { display: 'unset' }
}
