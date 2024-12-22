import type { Property, Properties } from 'csstype';
import { rem } from '../units';
import { AnyObject, arrayConcat, type NumericValue } from '../utils';
import { numericValues, numericStyleValue, important } from '../fns';
import { auto } from '../units';

// TODO: proper types for *.auto

// ============================================================
// Margins
// ============================================================

/**
 * ------------------------------------------------------------
 * All Margins
 * ------------------------------------------------------------
 * margin(0)             // -> { margin: 0 }
 * margin(0, 10)         // -> { margin: 0 10px }
 * margin(0, 10, 20)     // -> { margin: 0 10px 20px }
 * margin(0, 10, 20, 30) // -> { margin: 0 10px 20px 30px }
 * // Tailwind-style naming like `m()`
 * m(0, 'auto')  // -> { margin: 0 auto }
 */

type MarginLonghand = {
  marginTop?: Property.MarginTop,
  marginBottom?: Property.MarginBottom,
  marginLeft?: Property.MarginLeft,
  marginRight?: Property.MarginRight,
}

type MarginShorthand = {
  margin: Property.Margin,
}

type MarginProperty = MarginLonghand | MarginShorthand;

type MarginValue =
  | number
  | string
  | Property.Margin
  | (number | string | Property.Margin)[];

export const margin = (...m: MarginValue[]): MarginShorthand => {
  return {
    margin: numericValues(m as NumericValue | NumericValue[]) as Property.Margin,
  }
};

// Tailwind-style naming
export const m = margin;

export const m0 = m.u0 = margin.u0 = margin(0);
export const m1 = m.u1 = margin.u1 = margin(rem(0.25));
export const m2 = m.u2 = margin.u2 = margin(rem(0.5));
export const m3 = m.u3 = margin.u3 = margin(rem(0.75));
export const m4 = m.u4 = margin.u4 = margin(rem(1));
export const m5 = m.u5 = margin.u5 = margin(rem(1.25));
export const m6 = m.u6 = margin.u6 = margin(rem(1.5));
export const m8 = m.u8 = margin.u8 = margin(rem(2));
// special case for `auto` margin
// export const mAuto = m.auto = margin.auto = margin(auto);

export default margin;

type MarginUnit = {
  [k: `$${number}`]: Property.Margin
}

// ------------------------------------------------------------
// Top Margin
// ------------------------------------------------------------

type MarginTopValue =
  | number
  | string
  | Property.MarginTop;

type MarginTopProperty = {
  marginTop: MarginTopValue
}

export const marginTop = m.t = margin.t = margin.top = (value: MarginTopValue) => ({
  marginTop: numericStyleValue(value),
}) as MarginTopProperty;

// Tailwind-style naming
export const mt = (v: MarginTopValue) => marginTop(v);

// margin-top presets
export const mt0 = mt.u0 = margin.t0 = marginTop(0);
export const mt1 = mt.u1 = margin.t1 = marginTop(rem(0.25));
export const mt2 = mt.u2 = margin.t2 = marginTop(rem(0.5));
export const mt3 = mt.u3 = margin.t3 = marginTop(rem(0.75));
export const mt4 = mt.u4 = margin.t4 = marginTop(rem(1));
export const mt5 = mt.u5 = margin.t5 = marginTop(rem(1.25));
export const mt6 = mt.u6 = margin.t6 = marginTop(rem(1.5));
export const mt8 = mt.u8 = margin.t8 = marginTop(rem(2));
// @ts-ignore
export const mtAuto = mt.auto = m.t.auto = margin.t.auto = margin.top.auto = marginTop.auto = marginTop(auto);

// ------------------------------------------------------------
// Bottom Margin
// ------------------------------------------------------------

type MarginBottomValue =
  | number
  | string
  | Property.MarginBottom;

export const marginBottom = m.b = margin.b = margin.bottom = (value: MarginBottomValue) => ({
  marginBottom: numericStyleValue(value),
});

// Tailwind-style naming
export const mb = (v: MarginBottomValue) => marginBottom(v);

// margin-bottom presets
export const mb0 = mb.u0 = margin.b0 = marginBottom(0);
export const mb1 = mb.u1 = margin.b1 = marginBottom(rem(0.25));
export const mb2 = mb.u2 = margin.b2 = marginBottom(rem(0.5));
export const mb3 = mb.u3 = margin.b3 = marginBottom(rem(0.75));
export const mb4 = mb.u4 = margin.b4 = marginBottom(rem(1));
export const mb5 = mb.u5 = margin.b5 = marginBottom(rem(1.25));
export const mb6 = mb.u6 = margin.b6 = marginBottom(rem(1.5));
export const mb8 = mb.u8 = margin.b8 = marginBottom(rem(2));
// @ts-ignore
export const mbAuto = mb.auto = m.b.auto = margin.b.auto = margin.bottom.auto = marginBottom.auto = marginBottom(auto);

// ------------------------------------------------------------
// Left Margin
// ------------------------------------------------------------

type MarginLeftValue =
  | number
  | string
  | Property.MarginLeft;

export const marginLeft = m.l = margin.l = margin.left = (value: MarginLeftValue) => ({
  marginLeft: numericStyleValue(value),
});

// Tailwind-style naming
export const ml = (v: MarginLeftValue) => marginLeft(v);

// margin-left presets
export const ml0 = ml.u0 = margin.l0 = marginLeft(0);
export const ml1 = ml.u1 = margin.l1 = marginLeft(rem(0.25));
export const ml2 = ml.u2 = margin.l2 = marginLeft(rem(0.5));
export const ml3 = ml.u3 = margin.l3 = marginLeft(rem(0.75));
export const ml4 = ml.u4 = margin.l4 = marginLeft(rem(1));
export const ml5 = ml.u5 = margin.l5 = marginLeft(rem(1.25));
export const ml6 = ml.u6 = margin.l6 = marginLeft(rem(1.5));
export const ml8 = ml.u8 = margin.l8 = marginLeft(rem(2));
// @ts-ignore
export const mlAuto = ml.auto = m.l.auto = margin.l.auto = margin.left.auto = marginLeft.auto = marginLeft(auto);

// ------------------------------------------------------------
// Right Margin
// ------------------------------------------------------------

type MarginRight =
  | number
  | string
  | Property.MarginRight;

export const marginRight = m.r = margin.r = margin.right = (n: MarginRight) => {
  return {
    marginRight: numericStyleValue(n),
  }
};

// Tailwind-style naming
export const mr = marginRight;

// margin-right presets
export const mr0 = margin.r0 = marginRight(0);
export const mr1 = margin.r1 = marginRight(rem(0.25));
export const mr2 = margin.r2 = marginRight(rem(0.5));
export const mr3 = margin.r3 = marginRight(rem(0.75));
export const mr4 = margin.r4 = marginRight(rem(1));
export const mr5 = margin.r5 = marginRight(rem(1.25));
export const mr6 = margin.r6 = marginRight(rem(1.5));
export const mr8 = margin.r8 = marginRight(rem(2));
// @ts-ignore
export const mrAuto = mr.auto = m.r.auto = margin.r.auto = margin.right.auto = marginRight.auto = marginRight(auto);

// ------------------------------------------------------------
// X-Axis Margin { margin-left: v, margin-right: v }
// ------------------------------------------------------------

type MarginX =
  | number
  | string
  | (Property.MarginLeft | Property.MarginRight)
  | [ Property.MarginLeft, Property.MarginRight? ];

export const marginX = m.x = margin.x = (...x: MarginX[]) => {
  const [ left, right ] = x.flat();
  return {
    marginLeft: numericStyleValue(left),
    marginRight: numericStyleValue(right || left),
  }
};

// Tailwind-style naming
export const mx = marginX;

// margin-x presets
export const mx0 = margin.x0 = marginX(0);
export const mx1 = margin.x1 = marginX(rem(0.25));
export const mx2 = margin.x2 = marginX(rem(0.5));
export const mx3 = margin.x3 = marginX(rem(0.75));
export const mx4 = margin.x4 = marginX(rem(1));
export const mx5 = margin.x5 = marginX(rem(1.25));
export const mx6 = margin.x6 = marginX(rem(1.5));
export const mx8 = margin.x8 = marginX(rem(2));
// @ts-ignore
export const mxAuto = mx.auto = m.x.auto = margin.x.auto = marginX.auto = marginX(auto);

// ------------------------------------------------------------
// Y-Axis Margin { margin-top: v, margin-bottom: v }
// ------------------------------------------------------------

type MarginY =
  | number
  | string
  | (Property.MarginTop | Property.MarginBottom)
  | [ Property.MarginTop, Property.MarginBottom? ];

/**
 * @example
 * my(rem(1.25)) // -> margin-top: 1.25rem; margin-bottom: 1.25rem;
 * my(5, 10) // -> margin-top: 5px; margin-bottom: 10px;
 * const $1 = unit(1);
 * const $2 = unit(2);
 * my($1.rem, $2.rem); // -> margin-top: 1rem; margin-bottom: 2rem;
 */
export const marginY = margin.y = (...y: MarginY[]) => {
  const [ top, bottom ] = y.flat();
  return {
    marginTop: numericStyleValue(top),
    marginBottom: numericStyleValue(bottom || top),
  }
};

// Tailwind-style naming
export const my = marginY;

// margin-y presets
export const my0 = margin.y0 = marginY(0);
export const my1 = margin.y1 = marginY(rem(0.25));
export const my2 = margin.y2 = marginY(rem(0.5));
export const my3 = margin.y3 = marginY(rem(0.75));
export const my4 = margin.y4 = marginY(rem(1));
export const my6 = margin.y6 = marginY(rem(1.5));
export const my8 = margin.y8 = marginY(rem(2));
// @ts-ignore
export const myAuto = my.auto = m.y.auto = margin.y.auto = marginY.auto = marginY(auto);

// ------------------------------------------------------------
// Margin Shortcuts
// ------------------------------------------------------------

export const margin0 = () => ({
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
})

m.none = margin.none = margin0();

const mAutoValues = ['top', 'bottom', 'left', 'right', 'x', 'y', 'all', 'none'] as const;

type MarginAutoArg = typeof mAutoValues[number] | undefined;
type MarginAutoArgs = MarginAutoArg[] | undefined;

type Margins = ({
  marginTop?: Property.MarginTop,
  marginBottom?: Property.MarginBottom,
  marginLeft?: Property.MarginLeft,
  marginRight?: Property.MarginRight,
}) | ({
  margin: Property.Margin
})

export const marginAuto = (...m: MarginAutoArgs): Margins => {
  if (!m || !m.length) {
    return {
      margin: important(auto),
    }
  }

  for (const v of m.join(' ').trim().split(/\s+/)) {
    switch (v) {
      case 'top':
        return { marginTop: auto }
      case 'bottom':
        return { marginBottom: auto }
      case 'left':
        return { marginLeft: auto }
      case 'right':
        return { marginRight: auto }
      case 'x':
        return {
          marginLeft: auto,
          marginRight: auto,
        }
      case 'y':
        return {
          marginTop: auto,
          marginBottom: auto,
        }
      case 'all':
        return {
          marginTop: auto,
          marginBottom: auto,
          marginLeft: auto,
          marginRight: auto,
        }
      case 'none':
        return {
          marginTop: 'unset',
          marginBottom: 'unset',
          marginLeft: 'unset',
          marginRight: 'unset',
        }
    }
  }

  return {}
}

export const mAuto = m.auto = margin.auto = (...m: MarginAutoArgs) => marginAuto(...m);

// export const mAuto = m.auto = margin.auto = {
//   top: mt(auto),
//   bottom: mb(auto),
//   left: ml(auto),
//   right: mr(auto),
//   x: mx(auto),
//   y: my(auto),
//   xy: { ...mx(auto), ...my(auto) },
//   all: m(auto),
// };
