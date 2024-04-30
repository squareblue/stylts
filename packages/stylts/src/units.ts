/**
 * Functions for setting numeric values with unit suffix
 */
import { arrayConcat } from './utils';
import type {
  // NumericStringIsLength,
  NumericValue,
} from './utils';

let undef: undefined;

const unitTypes = [
  '',
  'pt',
  'px',
  'em',
  'rem',
  'vh',
  'vw',
  'lh',
  'rlh',
  'pct',
  '%',
] as const;

type UnitType = typeof unitTypes[number];

type UnitValue = number | NumericValue;
type UnitValues = UnitValue[] | UnitValue[][];

export function toUnit(value: UnitValues, unit: (UnitType | never) = ''): string {
  const suffix = String(value) !== '0' ? unit : '';
  return arrayConcat(value).join(suffix + ' ') + suffix;
}

export const pt = (...value: UnitValues) => toUnit(value, 'pt');
export const px = (...value: UnitValues) => toUnit(value, 'px');
export const em = (...value: UnitValues) => toUnit(value, 'em');
export const rem = (...value: UnitValues) => toUnit(value, 'rem');
export const vh = (...value: UnitValues) => toUnit(value, 'vh');
export const vw = (...value: UnitValues) => toUnit(value, 'vw');
export const lh = (...value: UnitValues) => toUnit(value, 'lh');
export const rlh = (...value: UnitValues) => toUnit(value, 'rlh');
export const pct = (...value: UnitValues) => toUnit(value, '%');

vh.full = '100vh';
vw.full = '100vw';
lh.x1 = '1lh';
rlh.x1 = '1rlh';
pct.full = '100%';
pct.x100 = '100%';

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

function getHex(value: NumericValue): [string, number] {
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
  const [val, len] = getHex(value);
  switch (len) {
    case 6:
      return `#${value}`;
    case 3:
      return `#` + val + val;
    case 2:
      return `#` + val + val + val;
    case 1:
      return `#` + val + val + val + val + val + val;
    case 4:
    case 5:
    default:
      console.error(``)
  }
  return val;
}

type RGBArgs = CSSNumericValue | NumericValue;

export function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

function parseHexString(value: NumericValue): string {
  let a: string | string[];
  let b: string | string[];
  let c: string | string[];
  [a] = getHex(value as NumericValue);
  [a, ...b] = a.split('').slice(0, 2);
  [b, ...c] = b.slice(0, 2);
  return '';
}

function hexToInt(value: NumericValue): number {
  return 0;
}

type RGBValues = [NumericValue, NumericValue, NumericValue];
type RGBAValues = [NumericValue, NumericValue, NumericValue, NumericValue];

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
