// Global values
const val = {
  initial: 'initial',
  inherit: 'inherit',
  revert: 'revert',
  revertLayer: 'revert-layer',
  unset: 'unset',
  auto: 'auto',
  none: 'none',
};
const globalList = Object.values(val);

// All `flex-*` classes used in Tailwind
const twFlex = {
  '_': 'flex',
  'row': {
    '_': 'flex-row',
    'reverse': 'flex-row-reverse',
  },
  'col': {
    '_': 'flex-col',
    'reverse': 'flex-col-reverse',
  },
  'wrap': {
    '_': 'flex-wrap',
    'reverse': 'flex-wrap-reverse',
  },
  'nowrap': 'flex-nowrap',
  '$1': 'flex-1',
  'auto': 'flex-auto',
  'initial': 'flex-initial',
  'none': 'flex-none',
};

const flexStyle = {
  _: { display: 'flex' },
  container: { display: 'flex' },
  flex: { display: 'flex' },

  flex1: { flex: '1 1 0%' },
  _1: { flex: '1 1 0%' },

  auto: { flex: '1 1 auto' },
  initial: { flex: '0 1 auto' },
  none: { flex: 'none' },

  row: { flexDirection: 'row' },
  rowReverse: { flexDirection: 'row-reverse' },
  col: { flexDirection: 'column' },
  column: { flexDirection: 'column' },
  colReverse: { flexDirection: 'column-reverse' },
  columnReverse: { flexDirection: 'column-reverse' },

  wrap: { flexWrap: 'wrap' },
  wrapReverse: { flexWrap: 'wrap-reverse' },

  grow: { flexGrow: 1 },
  grow1: { flexGrow: 1 },
  grow0: { flexGrow: 0 },

  shrink: { flexShrink: 1 },
  shrink1: { flexShrink: 1 },
  shrink0: { flexShrink: 0 },
};

flexStyle.basis = (value) => ({ flexBasis: value });
flexStyle.direction = (direction) => flexStyle[direction];

class Flex {
  constructor(value = '0 1 auto') {
    this.value = value;
    this.style = { flex: value };
  }

  add(obj = {}) {
    Object.assign(this.style, obj);
    return this;
  }

  /**
   * Returns a shallow copy of the composite `style` object
   * @param style
   * @returns {*}
   */
  css(style = {}) {
    return {
      ...this.add(style).style,
    };
  }

  /**
   * Use for the outer flexbox container.
   * This can be used instead of `stylts().display.flex`
   * @example
   *   const { flex, align } = stylts;
   *   const stl = stylts([
   *     flex().col.noWrap,
   *     align().itemsCenter.contentEnd
   *   ]);
   *   <Component style={stl} />
   * @returns {Flex}
   */
  get container() {
    return this.add({ display: 'flex' });
  }

  //////////////////////////////////////////////////
  // flex: [value]
  //////////////////////////////////////////////////

  set flex(value) {
    return this.add({ flex: value || 'initial' });
  }

  get flex() {
    this.flex = this.style.flex || 'initial';
    return this;
  };

  get flex1() {
    return this.add({ flex: '1 1 0%' });
  }
  get _1() { return this.flex1; };
  get [1]() { return this.flex1; };

  get initial() {
    return this.add({ flex: 'initial' });
  }

  get auto() {
    return this.add({ flex: 'auto' });
  }

  get none() {
    return this.add({ flex: 'none' });
  }

  //////////////////////////////////////////////////
  // flex-basis: [value]
  //////////////////////////////////////////////////

  /**
   * @typedef {
   *   'initial'|
   *   'content'|
   *   'max'|
   *   'max-content'|
   *   'min'|
   *   'min-content'|
   *   'auto'|
   *   'initial'|
   *   'inherit'|
   *   'revert'|
   *   'revert-layer'|
   *   'unset'|
   *   *|
   *   undefined
   * } BasisValue
   */

  /**
   * Set the `flex-bssis` CSS property
   * @param {BasisValue} [value]
   * @returns {Flex}
   */
  basis(value = 'initial') {
    return this.add({ flexBasis: value || 'initial' });
  }

  get basisContent() {
    return this.basis('content');
  }

  get basisMax() {
    return this.basis('max-content');
  }

  get basisMin() {
    return this.basis('min-content');
  }

  get basisFit() {
    return this.basis('fit-content');
  }

  get basisAuto() {
    return this.basis('auto');
  }

  flexBasis(value = 'initial') {
    return this.add({ flexBasis: value });
  }

  //////////////////////////////////////////////////
  // flex-direction: [value]
  //////////////////////////////////////////////////



  //////////////////////////////////////////////////
  // flex-grow: [value] | flex-shrink: [value]
  //////////////////////////////////////////////////

}

export default function flex(value) {
  return new Flex(value);
}

console.log(flex().basis().css());
