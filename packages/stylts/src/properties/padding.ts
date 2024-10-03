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
export const padTop = padding.t = padding.top = (value: number | Property.PaddingTop ) => ({
  paddingTop: numericStyleValue(value),
});
export const pT = padTop;

export const padBottom = padding.b = padding.bottom = (value: number | Property.PaddingBottom ) => ({
  paddingBottom: numericStyleValue(value),
});
export const pB = padBottom;

export const padLeft = padding.l = padding.left = (value: number | Property.PaddingLeft ) => ({
  paddingLeft: numericStyleValue(value),
});
export const pL = padLeft;

export const padRight = padding.r = padding.right = (value: number | Property.PaddingRight ) => ({
  paddingRight: numericStyleValue(value),
});
export const pR = padRight;

// x axis
export const padX = padding.x = (value: number | Property.Padding) => ({
  paddingLeft: numericStyleValue(value),
  paddingRight: numericStyleValue(value),
});
export const pX = padX;

// y axis
export const padY = padding.y = (value: number | Property.Padding) => ({
  paddingTop: numericStyleValue(value),
  paddingBottom: numericStyleValue(value),
});
export const pY = padY;

// shortcuts
export const p0 = padding.none = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

export const p = padding;
export const pad = padding;
