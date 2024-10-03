import { Property } from 'csstype';
import { AnyObject, stringJoin } from '../utils';
import { display, type StyleProperties } from '../stylts';

// ============================================================
// Flexbox
// ------------------------------------------------------------
class Flex {
  static get container() {
    return {
      display: 'flex',
    };
  }

  get container() {
    return Flex.container;
  }

  static get auto() {
    return {
      flex: 'auto',
    };
  }

  get auto() {
    return Flex.auto;
  }

  static get initial() {
    return {
      flex: 'initial',
    };
  }

  get initial() {
    return Flex.initial;
  }

  value = '';
  style = {};

  constructor(...more: Property.Flex[] | undefined) {
    const SPLITTER = ' ';
    const JOINER = ' ';
    this.value = stringJoin(more, JOINER, SPLITTER);
    this.style = {};
  }

  flex(flex_?: Property.Flex) {
    this.style = {
      ...(flex_ ? { flex: flex_ } : {}),
    };
  }

  flexDirection(direction: Property.FlexDirection) {
    this.setStyle({
      display: 'flex',
      flexDirection: direction,
    });
    return this;
  }

  get col() {
    return this.flexDirection('column').css();
  }
  // ^ alias
  column = this.col;

  get colReverse() {
    return this.flexDirection('column-reverse').css();
  }
  // ^ alias
  columnReverse = this.colReverse;

  get row() {
    return this.flexDirection('row').css();
  }

  css() {
    return { ...this.style };
  }

  setStyle(style: StyleProperties = {}) {
    this.style = {
      ...style,
      ...this.style,
    };
    return this;
  }

  mergeStyle(style: StyleProperties = {}) {
    this.style = {
      ...style,
      ...this.style,
    };
    return this;
  }

}

export function flex(...more: Property.Flex[] | undefined) {
  return new Flex(...more)
}

const flexFlex = flex();

flex.row = flexFlex.row;

flex.col = flexFlex.col;
flex.column = flexFlex.column;

flex.itemsCenter = {
  ...display.flex,
  alignItems: 'center',
};

flex.justifyCenter = {
  ...display.flex,
  justifyContent: 'center',
};

flex.center = {
  x: {
    ...display.flex,
    justifyContent: 'center',
  },
  y: {
    ...display.flex,
    alignItems: 'center',
  },
  xy: {
    ...display.flex,
    alignItems: 'center',
    justifyContent: 'center',
  },
} as {
  x: AnyObject,
  y: AnyObject,
  xy: AnyObject,
};
