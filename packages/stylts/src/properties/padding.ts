import { type Property } from 'csstype';
import { type NumericValue } from '../utils';
import { numericValues, numericStyleValue } from '../fns';

// ============================================================
// Padding
// ------------------------------------------------------------

// shorthand - padding(10, 20) // -> padding: 10px 20px;
export const padding = (value: number | number[] | Property.Padding) => ({
  padding: numericValues(value as NumericValue | NumericValue[]) as Property.Padding,
});
export default padding;

// padding-top
export const paddingTop = (value: number | Property.PaddingTop) => ({
  paddingTop: numericStyleValue(value),
});
export const pt = paddingTop;
padding.t = paddingTop;
padding.top = paddingTop;

// padding-bottom
export const paddingBotton = (value: number | Property.PaddingBottom) => ({
  paddingBottom: numericStyleValue(value),
});
export const pb = paddingBotton;
padding.b = paddingBotton;
padding.bottom = paddingBotton;

// padding-left
export const paddingLeft = (value: number | Property.PaddingLeft) => ({
  paddingLeft: numericStyleValue(value),
});
export const pl = paddingLeft;
padding.l = paddingLeft;
padding.left = paddingLeft;

// padding-right
export const paddingRight = (value: number | Property.PaddingRight) => ({
  paddingRight: numericStyleValue(value),
});
export const pr = paddingRight;
padding.r = paddingRight;
padding.right = paddingRight;

// x axis
export const paddingX = (value: number | Property.Padding) => ({
  paddingLeft: numericStyleValue(value),
  paddingRight: numericStyleValue(value),
});
export const px = paddingX;
padding.x = paddingX;

// y axis
export const paddingY = (value: number | Property.Padding) => ({
  paddingTop: numericStyleValue(value),
  paddingBottom: numericStyleValue(value),
});
export const py = paddingY;
padding.y = paddingY;

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
