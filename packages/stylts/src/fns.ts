import { camelCase } from 'change-case';
import { Properties, Property, StandardProperties, StandardShorthandProperties } from 'csstype';
import { em, px, rem } from './units';
import { AnyObject, arrayConcat, NumericValue, Whatever } from './utils';
// import { type DisplayProperties, display } from './properties/display';

function numericStyleValue(n: string | number | unknown): string {
  return typeof n === 'number' ? px(n) : String(n);
}

function numericValues(n: string | NumericValue | NumericValue[]) {
  const out: string[] = [];
  for (const value of arrayConcat(n)) {
    out.push(numericStyleValue(value));
  }
  return out.join(' ');
}

// Hold preset values, using syntax similar to Tailwind(?)
export const presets: AnyObject = {};

// ============================================================
// Display
// ------------------------------------------------------------
export const displayValue = (type: Property.Display) => ({ display: type });


// ============================================================
// Flexbox
// ------------------------------------------------------------
// type FlexTypes

export const flex = (more?: Property.Flex) => ({
  display: `flex ${more}`.trim(),
  ...(more ? { flex: more } : null),
});

flex.display = {
  display: 'flex',
};

flex.row = {
  ...flex.display,
  flexDirection: 'row',
};

flex.col = flex.column = {
  ...flex.display,
  flexDirection: 'column',
};

flex.center = {
  x: {
    ...flex.col,
    alignItems: 'center',
  },
  y: {
    ...flex.row,
    alignItems: 'center',
  },
  xy: {
    ...flex.display,
    alignItems: 'center',
    justifyContent: 'center',
  },
} as {
  x: AnyObject,
  y: AnyObject,
  xy: AnyObject,
};

// ============================================================
// Margins
// ------------------------------------------------------------
export const m = (value: string | number | (string | number)[]) => ({
  margin: numericValues(value as NumericValue | NumericValue[]) as Property.Margin,
});
export const margin = m;

// Horizontal margin
type MarginX = number | string | (Property.MarginLeft | Property.MarginRight);
// ...
export const mX = (n: MarginX | MarginX[]) => {
  const [ L, R ] = arrayConcat(n);
  return ({
    marginLeft: numericStyleValue(L) as Property.MarginLeft,
    marginRight: numericStyleValue(R || L) as Property.MarginRight,
  });
};
// Add as method om 'm'
m.x = mX;

// Vertical margin
type MarginY = number | string | [(Property.MarginTop | Property.MarginBottom)];

/**
 * @example
 * mY(5) // -> margin-top:5px;margin-bottom:5px;
 * my([5, 10]) // -> margin-top:5px;margin-bottom:10px;
 */
export const mY = (n: MarginY | MarginY[]) => {
  const [ T, B ] = arrayConcat(n);
  return ({
    marginTop: numericStyleValue(T),
    marginBottom: numericStyleValue(B || T),
  });
};
m.y = mY;

export const mR = (n: number | string | Property.MarginRight) => ({
  marginRight: numericStyleValue(n) as Property.MarginRight,
});
m.r = mR;
// margin-right presets
m.r1 = mR(rem(0.25));
m.r2 = mR(rem(0.5));
m.r3 = mR(rem(0.75));
m.r4 = mR(rem(1));
export const MR4 = mR(rem(0.25));
export const MR8 = mR(rem(0.5));
export const MR16 = mR(rem(1));

export const mL = (n: number | string | Property.MarginLeft) => ({
  marginLeft: numericStyleValue(n) as Property.MarginLeft,
});
m.l = mL;
// margin-left presets
export const ML4 = mL(rem(0.25));
export const ML8 = mL(rem(0.5));
export const ML16 = mL(rem(1));

export const mT = (n: number | string | Property.MarginTop) => ({
  marginTop: numericStyleValue(n) as Property.MarginTop,
});
m.t = mT;

export const mB = (n: number | string | Property.MarginBottom) => ({
  marginBottom: numericStyleValue(n) as Property.MarginBottom,
});
m.b = mB;

export const m0 = () => ({
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0',
  marginBottom: '0',
});
m.x0 = m0();

export const mAuto = () => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 'auto',
  marginBottom: 'auto',
});
m.auto = mAuto();

export const mAutoX = () => ({
  marginLeft: 'auto',
  marginRight: 'auto',
});
m.autoX = mAutoX();

export const mAutoY = () => ({
  marginTop: 'auto',
  marginBottom: 'auto',
});
m.autoY = mAutoY();

// Margin presets / shortcuts
Object.assign(presets, {
  m: {
    // x: mX,
    // y: mY,
    // l: mL,
    // r: mR,
    x0: mX(0),
    y0: mY(0),
    l0: mL(0),
    r0: mR(0),
  },
});


// ============================================================
// Padding
// ------------------------------------------------------------
export function p(value: NumericValue | NumericValue[]) {
  return { padding: numericValues(value) as Property.Padding };
}
export const padding = p;

export function pY(n: number | string) {
  return {
    paddingTop: numericStyleValue(n) as Property.PaddingTop,
    paddingBottom: numericStyleValue(n) as Property.PaddingBottom,
  };
}
p.y = pY;

export function pX(n: number | string) {
  return {
    paddingLeft: numericStyleValue(n) as Property.PaddingLeft,
    paddingRight: numericStyleValue(n) as Property.PaddingRight,
  };
}
p.x = pX;


// PRESETS
Object.assign(presets, {
  m: {
    x0: mX(0),
    y0: mY(0),
    r0: mR(0),
  },
});

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
