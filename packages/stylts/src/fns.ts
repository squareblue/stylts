import { camelCase } from 'change-case';
import { Properties, Property, StandardProperties, StandardShorthandProperties } from 'csstype';
import { em, px, rem } from './units';
import { AnyObject, arrayConcat, NumericValue, Whatever } from './utils';
import { display } from './properties/display';

function numericStyleValue(n: string | number | unknown): string {
  return typeof n === 'number' ? px(n) : String(n);
}

function numericValues(n: string | NumericValue | NumericValue[]) {
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
  display: 'flex',
  flexDirection: 'row'
}

flex.col = flex.column = {
  display: 'flex',
  flexDirection: 'column',
};

flex.center = {
  x: {
    display: 'flex',
    alignItems: 'center',
  },
  y: {
    display: 'flex',
    alignItems: 'center',
  },
  xy: {
    display: 'flex',
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
export const mgn = (value: string | number | (string | number)[]) => ({
  margin: numericValues(value as NumericValue | NumericValue[]) as Property.Margin,
});
export const m = mgn;
export const margin = mgn;

// Horizontal margin
type MarginX = number | string | Property.MarginLeft | [Property.MarginLeft,  Property.MarginRight?];
// ...
export const mx = (n: MarginX | MarginX[]) => {
  const [ left, right ] = arrayConcat(n);
  return ({
    marginLeft: numericStyleValue(left) as Property.MarginLeft,
    marginRight: numericStyleValue(right || left) as Property.MarginRight,
  });
};
// Add as method om 'm'
mgn.x = mx;

// Vertical margin
type MarginY = number | string | [Property.MarginTop | Property.MarginBottom];

/**
 * @example
 * mY(5) // -> margin-top:5px;margin-bottom:5px;
 * my([5, 10]) // -> margin-top:5px;margin-bottom:10px;
 */
export const my = (n: MarginY | MarginY[]) => {
  const [ top, bottom ] = arrayConcat(n);
  return ({
    marginTop: numericStyleValue(top),
    marginBottom: numericStyleValue(bottom || top),
  });
};
mgn.y = my;

export const mr = (n: number | string | Property.MarginRight) => ({
  marginRight: numericStyleValue(n) as Property.MarginRight,
});
mgn.r = mr;
// margin-right presets
mgn.r1 = mr(rem(0.25));
mgn.r2 = mr(rem(0.5));
mgn.r3 = mr(rem(0.75));
mgn.r4 = mr(rem(1));
export const MR4 = mr(rem(0.25));
export const MR8 = mr(rem(0.5));
export const MR16 = mr(rem(1));

export const ml = (n: number | string | Property.MarginLeft) => ({
  marginLeft: numericStyleValue(n) as Property.MarginLeft,
});
mgn.l = ml;
// margin-left presets
export const ML4 = ml(rem(0.25));
export const ML8 = ml(rem(0.5));
export const ML16 = ml(rem(1));

export const mt = (n: number | string | Property.MarginTop) => ({
  marginTop: numericStyleValue(n) as Property.MarginTop,
});
mgn.t = mt;

export const mb = (n: number | string | Property.MarginBottom) => ({
  marginBottom: numericStyleValue(n) as Property.MarginBottom,
});
mgn.b = mb;

export const m0 = () => ({
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0',
  marginBottom: '0',
});
mgn.x0 = m0();

type MAutoArgs = 'left' | 'right' | 'bottom' | 'top' | 'all' | 'none';

export const mgnAuto = (which = 'all') => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 'auto',
  marginBottom: 'auto',
});

mgn.auto = {
  xy: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  x: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  y: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  t: {
    marginTop: 'auto',
  }
} as const;

export const mAutoX = () => ({
  marginLeft: 'auto',
  marginRight: 'auto',
});
mgn.autoX = mAutoX();

export const mAutoY = {
  marginTop: 'auto',
  marginBottom: 'auto',
};
mgn.autoY = mAutoY;

// Margin presets / shortcuts
Object.assign(presets, {
  m: {
    // x: mx,
    // y: my,
    // l: ml,
    // r: mr,
    x0: mx(0),
    y0: my(0),
    l0: ml(0),
    r0: mr(0),
  },
});


// ============================================================
// Padding
// ------------------------------------------------------------
export function pad(value: NumericValue | NumericValue[]) {
  return { padding: numericValues(value) as Property.Padding };
}
export const p = pad;
export const pdg = pad;
export const padding = pad;

export function padx(n: number | string) {
  return {
    paddingLeft: numericStyleValue(n) as Property.PaddingLeft,
    paddingRight: numericStyleValue(n) as Property.PaddingRight,
  };
}
pad.x = padx;

export function pady(n: number | string) {
  return {
    paddingTop: numericStyleValue(n) as Property.PaddingTop,
    paddingBottom: numericStyleValue(n) as Property.PaddingBottom,
  };
}
pad.y = pady;


// PRESETS
Object.assign(presets, {
  m: {
    x0: mx(0),
    y0: my(0),
    r0: mr(0),
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
