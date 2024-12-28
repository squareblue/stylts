// Start with values from MDN
// https://developer.mozilla.org/en-US/docs/Web/CSS/display
// import { camelCase, kebabCase, snakeCase } from 'change-case';
import { Property } from 'csstype';

export const displayStyle = {
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

  constructor(value?: Property.Display) {
    this.set(value);
  }

  set(value: Property.Display) {
    return (
      typeof value === 'string'
        ? { display: value }
        : {}
    );
  }

  style = this.set;

}

export const display = new Display();
