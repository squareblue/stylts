/**
 * Functions for setting numeric values with unit suffix
 */
import { arrayConcat, NumberRange } from './utils';
import type {
  // ComputeRange,
  // NumericStringIsLength,
  NumericValue,
} from './utils';

let undef: undefined;

const unitTypes = [
  'px',
  'em',
  'rem',
  'vh',
  'vw',
  'lh',
  'rlh',
  'pt',
  'pct',
  '%',
  ''
] as const;

type UnitType = typeof unitTypes[number];

// type PxUnit = `${number}px`;
// type PtUnit = `${number}pt`;
// type EmUnit = `${number}em`;
// type RemUnit = `${number}rem`;
// type VhUnit = `${number}vh`;
// type LhUnit = `${number}lh`;
// type RlhUnit = `${number}rlh`;
// type PctUnit = `${number}pct`;

type UnitValue = number | string | NumericValue | '';
type UnitValues = UnitValue[] | UnitValue[][];

export function toUnit(value: UnitValues, unit: (UnitType | never) = ''): string {
  const suffix = String(value) !== '0' ? unit : '';
  return arrayConcat(value).join(suffix + ' ') + suffix;
}

export const px = (...value: UnitValues) => toUnit(value, 'px');
export const pt = (...value: UnitValues) => toUnit(value, 'pt');
export const em = (...value: UnitValues) => toUnit(value, 'em');
export const rem = (...value: UnitValues) => toUnit(value, 'rem');
export const vh = (...value: UnitValues) => toUnit(value, 'vh');
export const vw = (...value: UnitValues) => toUnit(value, 'vw');
export const lh = (...value: UnitValues) => toUnit(value, 'lh');
export const rlh = (...value: UnitValues) => toUnit(value, 'rlh');
export const pct = (...value: UnitValues) => toUnit(value, '%');

export class Unit {
  value: UnitValues = [1];
  num: UnitValue | UnitValues = 1;
  n: number | string | `${number}${UnitType | ''}` | "" | UnitValue[] | UnitValue[][];

  constructor(...value: UnitValues) {
    this.value = value;
  }

  u(...value: UnitValues | any) {
    this.value = value == null ? [''] : value;
    this.num = (
      (value).length === 1
        ? value[0]
        : value.map((val: any) => Number(val))
    ) as UnitValues | UnitValue;
    this.n = this.num;
    return this;
  }

  get px() {
    return px(...this.value);
  }

  get pt() {
    return pt(...this.value);
  }

  get em() {
    return em(...this.value);
  }

  get rem() {
    return rem(...this.value);
  }

  get vh() {
    return vh(...this.value);
  }

  get vw() {
    return vw(...this.value);
  }

  get lh() {
    return lh(...this.value);
  }

  get rlh() {
    return rlh(...this.value);
  }

  get pct() {
    return pct(...this.value);
  }

  static $0 = new Unit(0);
  static $100 = new Unit(100);
  static full = Unit.$100;
}

export function unit(...value: UnitValues) {
  return new Unit(...value);
}
export const u = unit().u;

px.x0 = px(0);
px.x5 = px(5);
px.x10 = px(10);
px.x20 = px(20);
px.x40 = px(40);

vh.full = vh(100);
vw.full = vw(100);
lh.x1 = lh(1);
rlh.x1 = rlh(1);
pct.full = pct.x100 = pct(100);

function getLength(value: unknown): number {
  try {
    return String(value).length;
  } catch (e) {
    console.error(e);
  }
  return 0;
}

function isLength(value: unknown, length: number): boolean {
  return getLength(value) === length;
}

// type HexShortcutLength = 1 | 2 | 3;
// type HexLength = HexShortcutLength | 6;
// type HexValue<S extends NumericValue> = NumericStringIsLength<S, 6>;
// type HexShortcut<S extends NumericValue> = NumericStringIsLength<S, HexShortcutLength>;
// type HexValueOrShortcut<S extends NumericValue> = NumericStringIsLength<S, HexLength>;

function stripHex(value: NumericValue): string {
  return String(value).replace(/^#/, '');
}

// function hexLength(value: NumericValue): number {
//   return stripHex(value).length;
// }

function parseHex(value: NumericValue): [ string, number ] {
  const val = stripHex(value);
  const len = val.length;
  return [ val, len ];
}

// function isHexFull(value: NumericValue): boolean {
//   return hexLength(value) === 6;
// }
// function isHexSingle(value: NumericValue): boolean {
//   return hexLength(value) === 1;
// }
// function isHexDouble(value: NumericValue): boolean {
//   return hexLength(value) === 2;
// }
// function isHexTriple(value: NumericValue): boolean {
//   return hexLength(value) === 3;
// }
// function isHexShortcut(value: NumericValue): boolean {
//   return (0
//     || hexLength(value) === 1
//     || hexLength(value) === 2
//     || hexLength(value) === 3
//   )
// }

/**
 * This will convert 1, 2, 3, or 6 character strings into
 * a hexadecimal value
 * @param value
 */
export function toHex(value: NumericValue): string {
  const [ val, len ] = parseHex(value);
  switch (len) {
    case 6:
    case 3:
      return `#${value}`;
    case 2:
      return `#` + val + val + val;
    case 1:
      return `#` + val + val + val + val + val + val;
    case 4:
    case 5:
    default:
      console.error(`Invalid hex value: ${val}`);
  }
  return val;
}

type RGBRange = NumberRange<0, 255>
type RGBValues = [RGBRange, RGBRange, RGBRange];
type RGBAValues = [RGBRange, RGBRange, RGBRange, number];

// type MAXIMUM_ALLOWED_BOUNDARY = 256
// type Octal = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]; // 0 - 255
// type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// type AlphaChanel = (`0.${ComputeRange<999>[number]}` | '1.0');
// type AssertAlpha<Alpha extends number> = `${Alpha}` extends AlphaChanel ? Alpha : never;

export function rgb(...rgb: RGBValues) {
  const [ r, g, b ] = rgb;
  return `rgb(${r}, ${g}, ${b})`;
}

export function rgba(...rgba: RGBAValues) {
  let [ r, g, b, a ] = rgba;
  if (a < 0) {
    a = 0;
  }
  if ((a * 100) > 100) {
    a = Math.min(a / 100, 1);
  }
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function parseHexString(value: NumericValue): string {
  let a: string | string[];
  let b: string | string[];
  let c: string | string[];
  [ a ] = parseHex(value as NumericValue);
  [ a, ...b ] = a.split('').slice(0, 2);
  [ b, ...c ] = b.slice(0, 2);
  return '';
}

function hexToInt(value: NumericValue): number {
  return 0;
}

function hexToRGB(hexValue: NumericValue): number[] {
  return [ 0 ];
}

export function rgbToHex(value: NumericValue | [ NumericValue, NumericValue, NumericValue ]): string {
  let rgb = '';
  if (Array.isArray(value)) {
    console.log(`I'm an array.`, value);
  }
  return '';
}

// console.log(toHex('123456'));
//
// console.log(px(10), px([1, 2, 3]));
// console.log(em(10), em([1, 2, 3]));
// console.log(rem(10), rem([1, 2, 3]));
// console.log(px(10), px([1, 2, 3]));
