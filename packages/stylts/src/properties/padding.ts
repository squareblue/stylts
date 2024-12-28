import { type Property } from 'csstype';
import { type NumericValue } from '../utils';
import { numericValues, numericStyleValue } from '../fns';

// ============================================================
// Padding
// ------------------------------------------------------------

export const padding = (value: number | number[] | Property.Padding) => ({
  padding: numericValues(value as NumericValue | NumericValue[]) as Property.Padding,
});
export default padding;

// top, bottom, left, right
export const paddingTop = (value: number | Property.PaddingTop) => ({
  paddingTop: numericStyleValue(value),
});
export const paddingT = paddingTop;
export const padTop = paddingTop;
export const padT = paddingTop;
export const pt = paddingTop;
padding.t = paddingTop;
padding.top = paddingTop;

export const paddingBotton = (value: number | Property.PaddingBottom) => ({
  paddingBottom: numericStyleValue(value),
});
export const paddingB = paddingBotton;
export const padBottom = paddingBotton;
export const padB = paddingBotton;
export const pb = padBottom;
padding.b = paddingBotton;
padding.bottom = paddingBotton;

export const paddingLeft = (value: number | Property.PaddingLeft) => ({
  paddingLeft: numericStyleValue(value),
});
export const paddingL = paddingLeft;
export const padLeft = paddingLeft;
export const padL = paddingLeft;
export const pl = paddingLeft;
padding.l = paddingLeft;
padding.left = paddingLeft;

export const paddingRight = (value: number | Property.PaddingRight) => ({
  paddingRight: numericStyleValue(value),
});
export const paddingR = paddingRight;
export const padRight = paddingRight;
export const padR = paddingRight;
export const pr = paddingRight;
padding.r = paddingRight;
padding.right = paddingRight;

// x axis
export const paddingX = (value: number | Property.Padding) => ({
  paddingLeft: numericStyleValue(value),
  paddingRight: numericStyleValue(value),
});
export const padX = paddingX;
export const px = paddingX;
padding.x = paddingX;

// y axis
export const padY = (value: number | Property.Padding) => ({
  paddingTop: numericStyleValue(value),
  paddingBottom: numericStyleValue(value),
});
export const py = padY;
padding.y = padY;

// shortcuts
export const p0 = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

padding.$0 = p0;
padding.none = p0;

export const p = padding;
export const pad = padding;
