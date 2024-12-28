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

export const auto = 'auto';

export const cssGlobalValues = [
  'inherit', 'initial', 'revert', 'revert-layer', 'unset',
] as const;

// CSS unit types listed here:
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units

const unitTypes = {

  // --- absolute units --- //
  cm: 'cm', // 'centimeters',
  in: 'in', // 'inches',
  mm: 'mm', // 'millimeters',
  pc: 'pc', //'picas',
  pt: 'pt', // 'points',
  px: 'px', // pixels',
  Q: 'Q', // quarter-millimeters',  // WTF?

  // --- root element font sizing --- //
  rcap: 'rcap', // root cap height',
  rch: 'rch', // root character "0" width',
  rem: 'rem', // root font size',
  rex: 'rex', // root font x-height',
  ric: 'ric', // ??? `Average character advance of a full-width glyph in the root element's font, as represented by the "水" (CJK water ideograph, U+6C34) glyph.`,
  rlh: 'rlh', // root line height',

  // --- local element font sizing --- //
  cap: 'cap', // relative cap height',
  ch: 'ch', // ch', // relative character "0" width',
  em: 'em', // relative font size',
  ex: 'ex', // relative font x-height',
  ic: 'ic', // Average character advance of a full-width glyph in the element's font, as represented by the "水" (CJK water ideograph, U+6C34) glyph.`,
  lh: 'lh', // relative line height',

  // --- viewport units --- //
  dvh: 'dvh', // dynamic viewport height',
  dvw: 'dvw', // dynamic viewport width',
  lvh: 'lvh', // large viewport height',
  lvw: 'lvw', // large viewport width',
  svh: 'svh', // small viewport height',
  svw: 'svw', // small viewport width',
  vb: 'vb', // viewport size in the root element's block axis`,
  vh: 'vh', // viewport height',
  vi: 'vi', // viewport size in the root element's inline axis`,
  vmax: 'vmax', // viewport larger dimension`,
  vmin: 'vmin', // viewport smaller dimension`,
  vw: 'vw', // viewport width',

  // --- (query) container units --- //
  cqb: 'cqb', // container block size',
  cqh: 'cqh', // container height',
  cqi: 'cqi', // container inline size',
  cqmax: 'cqmax', // larger of `cqi` or `cqb`',
  cqmin: 'cqmin', // smaller of `cqi` or `cqb`',
  cqw: 'cqw', // container width',

  // --- angle --- //
  deg: 'deg', // degrees',
  grad: 'grad', // gradians',
  rad: 'rad', // radians',
  turn: 'turn', // turns',

  // --- time --- //
  ms: 'ms', // milliseconds',
  s: 's', // seconds',

  // --- frequency --- //
  Hz: 'Hz', // Hertz',
  kHz: 'kHz', // KiloHertz',

  // --- flex units --- //
  fr: 'fr', // flexible length within grid container (*fr*action)',

  // --- resolution --- //
  dpcm: 'dpcm', // dots per centimeter',
  dpi: 'dpi', // dots per inch',
  dppx: 'dppx', // dots per px unit',
  x: 'x', // (alias for `dppx`) dots per px unit',

  // --- percentages --- //
  '%': '%', // 'percentage',
  pct: '%', // '`stylts` alias for `%`',
} as const;

export type UnitType = keyof typeof unitTypes;

export type UnitValue = `${NumericValue}${UnitType}` | NumericValue;
export type UnitValues = UnitValue[] | UnitValue[][];

// Use the unitTypes object to create getters for each unit type

export function unit(n: number | `${number}`) {
  return new Proxy(unitTypes, {
    get(_target, key) {
      return n + unitTypes[key];
    },
  });
}

export function toUnit(value: UnitValues, unit: (UnitType | never)): string {
  const suffix = String(value) !== '0' ? unit : '';
  return arrayConcat(value).join(suffix + ' ') + suffix;
}

export const pxl = (...value: UnitValues) => toUnit(value, 'px');
// local font-relative lengths
export const rem = (...value: UnitValues) => toUnit(value, 'rem');
export const em = (...value: UnitValues) => toUnit(value, 'em');
export const ex = (...value: UnitValues) => toUnit(value, 'ex');
export const lh = (...value: UnitValues) => toUnit(value, 'lh');
export const pts = (...value: UnitValues) => toUnit(value, 'pt');
// viewport units
export const vh = (...value: UnitValues) => toUnit(value, 'vh');
export const vw = (...value: UnitValues) => toUnit(value, 'vw');
export const rlh = (...value: UnitValues) => toUnit(value, 'rlh');
export const pct = (...value: UnitValues) => toUnit(value, '%');
// rotation
export const deg = (...value: UnitValues) => toUnit(value, 'deg');
// time
export const ms = (...value: UnitValues) => toUnit(value, 'ms');
export const sec = (...value: UnitValues) => toUnit(value, 's');

export class Unit {
  value: (UnitValues | NumericValue[]) = [1];
  num: UnitValue | UnitValues | NumericValue = 1;
  n: number | string | `${number}${UnitType | ''}` | '' | UnitValue[] | UnitValue[][];

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
    return pxl(...this.value);
  }

  get pt() {
    return pts(...this.value);
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

  static $0 = 0;
  static none = 0;
  static full = pct(100);
}

// export function unit(...value: UnitValues) {
//   return new Unit(...value);
// }

unit.px = pxl;
unit.pt = pts;

vh.full = vh(100);
vw.full = vw(100);
lh.$1 = lh(1);
rlh.$1 = rlh(1);
pct.$100 = pct(100);
pct.full = pct.$100

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

function parseHex(value: NumericValue): [string, number] {
  const val = stripHex(value);
  const len = val.length;
  return [val, len];
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
  const [val, len] = parseHex(value);
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
  const [r, g, b] = rgb;
  return `rgb(${r}, ${g}, ${b})`;
}

export function rgba(...rgba: RGBAValues) {
  let [r, g, b, a] = rgba;
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
  [a] = parseHex(value as NumericValue);
  [a, ...b] = a.split('').slice(0, 2);
  [b, ...c] = b.slice(0, 2);
  return '';
}

function hexToInt(value: NumericValue): number {
  return 0;
}

function hexToRGB(hexValue: NumericValue): number[] {
  return [0];
}

export function rgbToHex(value: NumericValue | [NumericValue, NumericValue, NumericValue]): string {
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
