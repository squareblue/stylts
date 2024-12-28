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

// x axis - supports separate values for left and right
type PaddingXMulti =
  | [Property.PaddingLeft, Property.PaddingRight]
  | { left: Property.PaddingLeft, right: Property.PaddingRight }

type PaddingX =
  | Property.Padding
  | PaddingXMulti

export const paddingX = (value: PaddingX) => {
  let leftValue = value as Property.PaddingLeft;
  let rightValue = value as Property.PaddingRight;
  if (Array.isArray(value)) {
    [leftValue, rightValue] = value;
  } else if (value.hasOwnProperty('left') && value.hasOwnProperty('right')) {
    // @ts-ignore
    leftValue = value.left;
    // @ts-ignore
    rightValue = value.right;
  } else {
    // there is no else.
  }
  return {
    paddingLeft: numericStyleValue(leftValue),
    paddingRight: numericStyleValue(rightValue),
  }
};
export const px = paddingX;
padding.x = paddingX;

// y axis - supports separate values for top and bottom
type PaddingYMulti =
  | [Property.PaddingTop, Property.PaddingBottom]
  | ({ top: Property.PaddingTop, bottom: Property.PaddingBottom })

type PaddingY = Property.Padding | PaddingYMulti;

export const paddingY = (value: PaddingY) => {
  let topValue = value as Property.PaddingLeft;
  let bottomValue = value as Property.PaddingRight;
  if (Array.isArray(value)) {
    [topValue, bottomValue] = value;
  } else if (value.hasOwnProperty('top') && value.hasOwnProperty('bottom')) {
    // @ts-ignore
    topValue = value.top;
    // @ts-ignore
    bottomValue = value.bottom;
  } else {
    // there is no else.
  }
  return {
    paddingTop: numericStyleValue(topValue),
    paddingBottom: numericStyleValue(bottomValue),
  }
};
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
