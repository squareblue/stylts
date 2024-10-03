import { Property } from 'csstype';
import { px } from './units';
import { AnyObject, arrayConcat, NumericValue, Whatever } from './utils';

export function numericStyleValue(n: string | number | unknown): string {
  return typeof n === 'number' ? px(n) : String(n);
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

// ============================================================
// Background
// ------------------------------------------------------------
export const bg = (bkgd: Property.Background) => ({ background: bkgd });
bg.color = {} as AnyObject;

export const bgColor = (color: Property.BackgroundColor) => ({ backgroundColor: color });
bg.color.red = bgColor('red');
bg.red = bg.color.red;

export const border = (values: Whatever) => ({
  border: values || '1px solid'
})
border.sm = border('1px solid');
border.lightGray = { borderColor: '#d0d0d0' }

export const rounded = (values: Whatever) => ({
  borderRadius: numericStyleValue(values || '3px')
});

rounded.sm = { borderRadius: numericStyleValue(3) }
rounded.med = { borderRadius: numericStyleValue(7) }
rounded.lg = { borderRadius: numericStyleValue(13) }
rounded.xl = { borderRadius: numericStyleValue(25) }
