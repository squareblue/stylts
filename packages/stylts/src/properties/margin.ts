import { type Property } from 'csstype';
import { rem } from '../units';
import { arrayConcat, type NumericValue } from '../utils';
import { numericValues, numericStyleValue } from '../fns';

// ============================================================
// Margins
// ------------------------------------------------------------

const auto = 'auto';

type Margin =
  | number
  | string
  | Property.Margin
  | (number | string | Property.Margin)[];

export const margin = (value: Margin) => {
  return {
    margin: numericValues(value as NumericValue | NumericValue[]) as Property.Margin,
  }
};
export default margin;
export const m = margin;

type MarginTop =
  | number
  | string
  | Property.MarginTop;

// top, bottom, left, right
export const marginTop = m.t = margin.t = margin.top = (value: MarginTop) => ({
  marginTop: numericStyleValue(value),
});
export const mT = marginTop;
// margin-top presets
export const mt0 = margin.t0 = marginTop(0);
export const mt1 = margin.t1 = marginTop(rem(0.25));
export const mt2 = margin.t2 = marginTop(rem(0.5));
export const mt3 = margin.t3 = marginTop(rem(0.75));
export const mt4 = margin.t4 = marginTop(rem(1));
export const mt5 = margin.t5 = marginTop(rem(1.25));
export const mt6 = margin.t6 = marginTop(rem(1.5));
export const mt8 = margin.t8 = marginTop(rem(2));
// @ts-ignore
export const mtAuto = margin.tAuto = margin.top.auto = marginTop.auto = marginTop(auto);

type MarginBottom =
  | number
  | string
  | Property.MarginBottom;

export const marginBottom = m.b = margin.b = margin.bottom = (value: MarginBottom) => ({
  marginBottom: numericStyleValue(value),
});
export const mB = marginBottom;
// margin-bottom presets
export const mb0 = margin.b0 = marginBottom(0);
export const mb1 = margin.b1 = marginBottom(rem(0.25));
export const mb2 = margin.b2 = marginBottom(rem(0.5));
export const mb3 = margin.b3 = marginBottom(rem(0.75));
export const mb4 = margin.b4 = marginBottom(rem(1));
export const mb5 = margin.b5 = marginBottom(rem(1.25));
export const mb6 = margin.b6 = marginBottom(rem(1.5));
export const mb8 = margin.b8 = marginBottom(rem(2));
// @ts-ignore
export const mbAuto = margin.bAuto = margin.bottom.auto = marginBottom.auto = marginBottom(auto);

type MarginLeft =
  | number
  | string
  | Property.MarginLeft;

export const marginLeft = m.l = margin.l = margin.left = (value: MarginLeft) => ({
  marginLeft: numericStyleValue(value),
});
export const mL = marginLeft;
// margin-left presets
export const ml0 = margin.l0 = marginLeft(0);
export const ml1 = margin.l1 = marginLeft(rem(0.25));
export const ml2 = margin.l2 = marginLeft(rem(0.5));
export const ml3 = margin.l3 = marginLeft(rem(0.75));
export const ml4 = margin.l4 = marginLeft(rem(1));
export const ml5 = margin.l5 = marginLeft(rem(1.25));
export const ml6 = margin.l6 = marginLeft(rem(1.5));
export const ml8 = margin.l8 = marginLeft(rem(2));
// @ts-ignore
export const mlAuto = margin.lAuto = margin.left.auto = marginLeft(auto);

type MarginRight =
  | number
  | string
  | Property.MarginRight;

export const marginRight = m.r = margin.r = margin.right = (n: MarginRight) => {
  return {
    marginRight: numericStyleValue(n),
  }
};
export const mR = marginRight;
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
export const mrAuto = margin.rAuto = m.r.auto = margin.right.auto = marginRight(auto);

// x axis
type MarginX =
  | number
  | string
  | (Property.MarginLeft | Property.MarginRight)
  | [ Property.MarginLeft, Property.MarginRight? ];

export const marginX = m.x = margin.x = (n: MarginX) => {
  const [ left, right ] = arrayConcat(n);
  return {
    marginLeft: numericStyleValue(left),
    marginRight: numericStyleValue(right || left),
  }
};
export const mX = marginX;
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
export const mxAuto = margin.xAuto = margin.x.auto = marginX(auto);

// y axis
type MarginY =
  | number
  | string
  | (Property.MarginTop | Property.MarginBottom)
  | [ Property.MarginTop, Property.MarginBottom? ];

/**
 * @example
 * my(rem(1.25)) // -> margin-top: 1.25rem; margin-bottom: 1.25rem;
 * my([5, 10)]) // -> margin-top: 5px; margin-bottom: 10px;
 */
export const marginY = margin.y = (n: MarginY | MarginY[]) => {
  const [ top, bottom ] = arrayConcat(n);
  return {
    marginTop: numericStyleValue(top),
    marginBottom: numericStyleValue(bottom || top),
  }
};
export const mY = marginY;

// margin-y presets
export const my0 = margin.y0 = marginY(0);
export const my1 = margin.y1 = marginY(rem(0.25));
export const my2 = margin.y2 = marginY(rem(0.5));
export const my3 = margin.y3 = marginY(rem(0.75));
export const my4 = margin.y4 = marginY(rem(1));
export const my6 = margin.y6 = marginY(rem(1.5));
export const my8 = margin.y8 = marginY(rem(2));
// @ts-ignore
export const myAuto = margin.yAuto = margin.y.auto = marginY(auto);

// shortcuts
export const m0 = margin.none = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};

type MarginAutoArgs = 'left' | 'right' | 'bottom' | 'top' | 'all' | 'none';

// auto
export const mAuto = margin.auto = {
  top: mT(auto),
  bottom: mB(auto),
  left: mL(auto),
  right: mR(auto),
  x: mX(auto),
  y: mY(auto),
  xy: Object.assign({}, mX(auto), mY(auto)),
  all: m(auto),
};

export const mgn = margin;
