import { Property } from 'csstype';
import { pxl } from './units';
import { AnyObject, arrayConcat, NumericValue, Whatever } from './utils';

export function important(value: string | NumericValue) {
  return `${value} !important`
}

export function numericStyleValue(n: string | number | unknown): string {
  return typeof n === 'number' ? pxl(n) : String(n);
}

export function numericValues(n: string | NumericValue | NumericValue[]) {
  const out: string[] = [];
  for (const value of arrayConcat(n)) {
    out.push(numericStyleValue(value));
  }
  return out.join(' ').trim();
}

// Hold preset values, using syntax similar to Tailwind(?)
export const presets: AnyObject = {};

// ============================================================
// Display
// ------------------------------------------------------------
export const displayValue = (type: Property.Display) => ({ display: type });
