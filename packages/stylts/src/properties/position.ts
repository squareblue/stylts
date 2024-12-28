import { Property, PropertyValue, Globals } from 'csstype';
import { cssGlobalValues, unit, UnitType, UnitValue } from '../units';
import { StyleProperties } from '../stylts';

type PropertyUnitValue = PropertyValue<UnitValue> | number | Globals | 'auto';

type StyleRuleObject = {
  [k in keyof StyleProperties]: PropertyUnitValue
};

const positions = [
  ...cssGlobalValues,
  'absolute', 'fixed', 'relative', 'static', 'sticky',
];

export class Position {
  style: StyleProperties = { position: 'inherit' };
  value: Property.Position = 'inherit';

  constructor(value?: Property.Position) {
    this.value = value;
    this.style = { position: this.value };
  }

  get absolute() {
    this.value = 'absolute';
    return (this.style = { position: this.value });
  }

  get fixed() {
    this.value = 'fixed';
    return (this.style = { position: this.value });
  }

  get relative() {
    this.value = 'relative';
    return (this.style = { position: this.value });
  }

  get static() {
    this.value = 'static';
    return (this.style = { position: this.value });
  }

  get sticky() {
    this.value = 'sticky';
    return (this.style = { position: this.value });
  }

}

export function position(value?: Property.Position) {
  if (!positions.includes(value)) {
    return { position: 'inherit' };
  }
  return value != null ? (new Position())[value] : new Position();
}

class StylePropertyValue {
  style: StyleRuleObject;

  constructor(styleRule: StyleRuleObject = {}) {
    this.style = { ...styleRule };
  }

  valueWithUnit(unit: UnitType) {
    return Object.entries(this.style).reduce((style, [prop, val]) => {
      return {
        ...style,
        [`${prop}`]: `${val}${unit}`,
      };
    }, {});
  }

  get px() {
    return (this.style = this.valueWithUnit('px'));
  }

  get em() {
    return (this.style = this.valueWithUnit('em'));
  }

  get rem() {
    return (this.style = this.valueWithUnit('rem'));
  }

  get vh() {
    return (this.style = this.valueWithUnit('vh'));
  }

  get vw() {
    return (this.style = this.valueWithUnit('vw'));
  }

  get lh() {
    return (this.style = this.valueWithUnit('lh'));
  }

  get rlh() {
    return (this.style = this.valueWithUnit('rlh'));
  }
}

export const top = (value: PropertyUnitValue) => new StylePropertyValue({ top: value });
export const bottom = (value: PropertyUnitValue) => new StylePropertyValue({ bottom: value });
export const left = (value: PropertyUnitValue) => new StylePropertyValue({ left: value });
export const right = (value: PropertyUnitValue) => new StylePropertyValue({ right: value });

type PositionProperties = {
  top?: PropertyUnitValue,
  bottom?: PropertyUnitValue,
  left?: PropertyUnitValue,
  right?: PropertyUnitValue,
  x?: PropertyUnitValue,
  y?: PropertyUnitValue
}

type PositionValues = PositionProperties | PropertyUnitValue | Array<PositionProperties | PropertyUnitValue>;

function parsePosition(positonType: Property.Position, values: PositionValues) {
  const style = {
    position: positonType
  } as PositionProperties

  if (/string|number/.test(typeof values)) {
    style.top = values as PropertyUnitValue;
    style.bottom = values as PropertyUnitValue;
    style.left = values as PropertyUnitValue;
    style.right = values as PropertyUnitValue;
  }
}

function positionAbsolute(values) {

}

const $0_5rem = unit(0.5).rem;
const $1rem = unit(1).rem;
const $5px = unit(5).px;
const $10px = unit(10).px;
// position.absolute($10px)           // -> { positon: 'absolute', top: '10px', bottom: '10px', left: '10px', right: '10px' }
// position.absolute([$5px, $10px])   // -> { position: 'absolute', top: '5%', bottom: '5%', left: '10%', right: '10%' }
// position.sticky({ top: 0 })        // -> { position: 'sticky', top: 0 }
// position.sticky([0, '', '', ''])   // -> { position: 'sticky', top: 0 }
// position.relative([ $0_5rem, $1rem, '', '' ]); // -> { position: 'relative', top: '1rem', right: '1rem' };
//                                     ^^  ^^  empty strings *omit* the value
// ...or...
// position.absolute().top($10px).right($5px);

position.absolute = (values: PositionValues) => parsePosition('absolute', values);
position.fixed = { position: 'fixed' };
position.relative = { position: 'relative' };
position.static = { position: 'static' };
position.sticky = { position: 'sticky' };
