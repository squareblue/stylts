import { Property } from 'csstype';
import { AnyObject } from '../utils';

import { namedColors } from '../constants/colors';

type BgProperty = Property.Background | Property.Background[] | null;

interface BgStyle {
  background: Property.Background;
}

type BgFn = (bkgd: BgProperty) => ({
  background: Property.Background
})

interface BgI {
  (c: Property.Background): BgStyle;

  static(bg: Property.Background): BgStyle;
}

type Bg = BgStyle | BgI | BgFn | {};

function resolveBg(bgValue: BgProperty) {
  return ['' as any].concat(bgValue).flat(9).map((bgItem, idx) => {
    return (
      typeof bgItem === 'function'
        ? bgItem(idx)
        : bgItem
    );
  }).join(' ').trim();
}

function bgProp(bgValue: BgProperty) {
  return bgValue != null
    ? { background: resolveBg(bgValue) }
    : {};
}


// ============================================================
// Background
// ------------------------------------------------------------
class Background {
  style: Bg;

  constructor(bgValue?: BgProperty) {
    this.style = bgProp(bgValue);
  }

  static set = (bgValue: BgProperty) => ({
    background: bgValue as Property.Background,
  });

  set(bgValue: BgProperty) {
    return (
      this.style = {
        background: bgValue as Property.Background,
      }
    );
  };

  get() {
    return this.style;
  }
}

export const bg = (bgValue?: Property.Background) => {
  return (new Background(bgValue)).style;
};
// alias
export const background = bg;

// alias static 'set' method
bg.set = Background.set;

// shortcuts
bg.initial = bg.reset = bg.set('initial');
bg.none = bg.set('none');
bg.transparent = bg.set('transparent');

type BgPositionX = {
  x: Property.BackgroundPositionX
}

type BgPositionY = {
  y: Property.BackgroundPositionY
}

type BgPositionXY =
  | BgPositionX
  | BgPositionY
  | (BgPositionX & BgPositionY)

type BgPosition =
  | Property.BackgroundPosition
  | BgPositionXY

type BgPositionReturn =
  | { backgroundPosition: Property.BackgroundPosition }
  | ({
      backgroundPositionX?: Property.BackgroundPositionX,
      backgroundPositionY?: Property.BackgroundPositionY,
    })

// background-position: {}
bg.position = (value: BgPosition): BgPositionReturn => {
  if (/string|number/.test(typeof value)) {
    return { backgroundPosition: String(value) }
  } else {
    return {
      // @ts-ignore
      ...(value.x != null ? { backgroundPositionX: value.x } : {}),
      // @ts-ignore
      ...(value.y != null ? { backgroundPositionY: value.y } : {})
    }
  }
};

const bgPos = bg.position({ x: 'center'})

// ============================================================
// Background Color
// ------------------------------------------------------------
export function bgColor(color: Property.BackgroundColor) {
  return { backgroundColor: color };
}

// shortcuts
bgColor.none = bgColor('initial');
