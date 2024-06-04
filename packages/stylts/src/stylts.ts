import { camelCase, kebabCase } from 'change-case';
import {
  Properties,
  PropertiesHyphen,
  Property,
  VendorProperties,
  VendorPropertiesHyphen,
} from 'csstype';
import type { AnyObject, Whatever } from './utils';
import { arrayConcat } from './utils';
import { px } from './units';

export * from './utils';
export * from './fns';
export * from './units';
export * from './properties';

export type Stringable = string | number;

// export type StyltsProperties = string | string[] | {
//   [P in keyof Properties]: (
//     | number
//     | number[]
//     | Properties[P]
//     | Properties[P][]
//     );
// };

type StyleStandardProperties = Properties & PropertiesHyphen;
type StyleVendorProperties = VendorProperties & VendorPropertiesHyphen;

// ALL of the CSS properties
export type StyleProperties = StyleStandardProperties & StyleVendorProperties;

type StyltsPresets = string | string[];

export type StyltsArgs = [
  (string | StyleProperties | string[] | StyleProperties[]),
  (StyltsPresets | undefined)
]

export function numericStyleValue(n: string | number | unknown): string {
  return typeof n === 'number' ? px(n) : String(n);
}
//
// function numericValues(n: string | NumericValue | NumericValue[]) {
//   const out: string[] = [];
//   for (const value of concatToArray(n)) {
//     out.push(numericStyleValue(value));
//   }
//   return out.join(' ');
// }
//
// export function margin(value: string | number | (string | number)[]) {
//   return { margin: numericValues(value as NumericValue | NumericValue[]) as Property.Margin };
// }
//
// export function mX(n: number | string) {
//   return {
//     marginLeft: numericStyleValue(n) as Property.MarginLeft,
//     marginRight: numericStyleValue(n) as Property.MarginRight,
//   };
// }
//
// export function mY(n: number | string) {
//   return {
//     marginTop: numericStyleValue(n) as Property.MarginTop,
//     marginBottom: numericStyleValue(n) as Property.MarginBottom,
//   };
// }
//
// export function padding(value: NumericValue | NumericValue[]) {
//   return { padding: numericValues(value) as Property.Padding };
// }
//
// export function pY(n: number | string) {
//   return {
//     paddingTop: numericStyleValue(n) as Property.PaddingTop,
//     paddingBottom: numericStyleValue(n) as Property.PaddingBottom,
//   };
// }
//
// export function pX(n: number | string) {
//   return {
//     paddingLeft: numericStyleValue(n) as Property.PaddingLeft,
//     paddingRight: numericStyleValue(n) as Property.PaddingRight,
//   };
// }
//
// export function display(value: Property.Display) {
//   return {
//     display: value,
//   };
// }
//
// export function flex(value: Property.Flex) {
//   return { display: value }
// }
//
// export function flexCol() {
//   return {
//     display: 'flex',
//     flexDirection: 'column',
//   }
// }

function normalizeProperties(properties: StyleProperties) {
  return Object.entries(properties).reduce((style, [ prop, value ]) => {
    style[camelCase(prop)] = String(value);
    return style;
  }, {} as AnyObject);
}

// Ensures resolution of all CSS rules with camelCase property names
function resolveProperties(styleList: StyleProperties[]): Properties {
  return styleList.reduce((resolved, style) => {
    Object.assign(
      resolved,
      normalizeProperties(style),
    );
    return resolved;
  }, {} as AnyObject);
}

// export const st = {
//   child: (selector: string) => `|${selector}`,
//   pseudo: (state: string) => state.replace(/^[&:]*/, '&:'),
//   ___: null,
// };

export class Stylts {
  style: StyleProperties;
  styleList: StyleProperties[];
  presets?: StyltsPresets;

  constructor(...[ style, presets ]: StyltsArgs) {
    this.style = style as StyleProperties;
    this.styleList = arrayConcat(this.style);
    this.presets = presets;
  }

  resolve() {
    return (
      this.style = resolveProperties(this.styleList)
    );
  }

  add(properties: StyleProperties) {
    this.styleList.push(normalizeProperties(properties));
    return this;
  }

  merge(properties: StyleProperties | StyleProperties[]) {
    this.styleList = arrayConcat(this.styleList, properties);
    this.resolve();
    return this;
  }

  toEntries() {
    return Object.entries(this.resolve());
  }

  toString() {
    return (
      this.toEntries().map(([ prop, value ]) => (
        `${kebabCase(prop)}: ${value}`
      )).join('; ') + ';'
    );
  }
  toAttribute = this.toString;

  get attr() {
    return this.toString();
  }

  toCSS() {
    return `{ ${this.toString()} }\n`;
  }

  get css() {
    return this.toCSS();
  }

}

type CSSStyleArg = string | string[] | StyleProperties | StyleProperties[];
type CSSPresetsArg = StyltsPresets | undefined;

export default function stylts(style: CSSStyleArg, presets?: CSSPresetsArg): Stylts {
  return new Stylts(style, presets);
}
// Alias
export const css = stylts;
