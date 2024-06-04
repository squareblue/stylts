/**
 * Utility functions and types. 🤔
 */
import { NumericLiteral } from 'typescript';
import { Stringable, StyltsArgs } from './stylts';

export { kebabCase } from 'change-case';

export type Whatever = unknown | never | undefined;

export type SplitValue = string | RegExp;

// TODO: NEED TYPE FOR STRING THAT CONTAINS ONLY NUMBERS

export type NumericString = `${number}`;
export type NumericValue = number | NumericString;

type StringToTuple<S extends string> =
  S extends `${infer Char}${infer Rest}`
    ? [ Char, ...StringToTuple<Rest> ]
    : [];

type StringLength<S extends string> = StringToTuple<S>['length'];

export type StringIsLength<
  S extends string,
  N extends number,
> = StringLength<S> extends N ? true : false;

type EmptyString<S extends string> = StringIsLength<S, 0>;
type NotEmptyString<S extends string> = StringIsLength<S, 0> extends true
  ? false
  : true;

type NumericValueTuple<S extends NumericValue> =
  S extends `${infer Char}${infer Rest}`
    ? [ Char, ...StringToTuple<Rest> ]
    : [];

export type NumericValueLength<S extends NumericValue> =
  NumericValueTuple<S>['length'];

export type NumericStringIsLength<
  S extends NumericValue,
  N extends number,
> = NumericValueLength<S> extends N ? true : false;

type Enumerate<N extends number, Acc extends number[] = []> =
  Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

export type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;

export type ComputeRange<N extends number, Result extends Array<unknown> = []> =
  Result['length'] extends N
    ? Result
    : ComputeRange<N, [ ...Result, Result['length'] ]>

export type HexLetter = 'A' | 'a' | 'B' | 'b' | 'C' | 'c' | 'D' | 'd' | 'E' | 'e' | 'F' | 'f';
export type HexNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type HexChar = HexLetter | HexNumber;

export type AnyObject = {
  [key: string | number | symbol]: Whatever;
}

export type AnyObjectMethods = {
  [key: string]: (...args: Whatever[]) => Whatever;
}

export function objectType(obj: unknown): string {
  return Object.prototype.toString.call(obj);
}

const objectObject = objectType({});

export function isPlainObject(obj: unknown): boolean {
  return objectType(obj) === objectObject;
}

export function possiblyJSON(value: unknown): boolean {
  return typeof value === 'string' && /^([\[{])/.test(value.trim());
}

export function getJSON(value: unknown): string {
  if (possiblyJSON(value)) {
    return value as string;
  }
  if (isPlainObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  return 'null';
}

// TODO: USE MORE SPECIFIC TYPE FOR 'values'?
export function arrayConcat(...values: (any | any[])): any[] {
  const arr: any[] = [];
  for (const value of [ ...values ].flat(Infinity)) {
    if (value != null) {
      arr.push(value);
    }
  }
  return arr;
  // return [].concat(...values).flat(Infinity);
}

type StringConcatArgs = [
  (Stringable | Stringable[]),
  string?
]

export function stringConcat(...[strings, joiner = '']: StringConcatArgs): string {
  return arrayConcat(strings).reduce((out, str) => {
    out.push(String(str));
    return out;
  }, []).join(joiner);
}

type StringJoinArgs = [
  (Stringable | Stringable[]),
  string?,
  (string | RegExp)?
]

export function stringJoin(...[
  strings,
  joiner = ' ',
  splitter = ' '
]: StringJoinArgs): string {
  return stringConcat(strings, joiner).split(splitter).join(joiner);
}

function sortedObjectToMap(obj: {}) {
  return Object.keys(obj).sort().reduce((out, key) => {
    out.set(key, obj[key]);
    return out;
  }, new Map());
}

export function objectCompare(a_: {}, b_: {}) {
  const a = sortedObjectToMap(a_);
  const b = sortedObjectToMap(b_);
  if (a.size !== b.size) {
    return false;
  }
  if (JSON.stringify(a.keys()) === JSON.stringify(b.keys())) {
    return (
      JSON.stringify(a.values()) === JSON.stringify(b.values())
    )
  }
  return false;
}

export function logWhat(...args: unknown[]): AnyObject {
  let desc = '';
  let result = null as Whatever;
  let error = '';

  for (const arg of args) {
    if (typeof arg === 'string' || typeof arg === 'number') {
      if (possiblyJSON(arg)) {
        desc = 'could be JSON';
        result = JSON.parse(arg as string);
        console.log(desc, result);
      } else {
        desc = 'not JSON';
        result = arg;
        console.log(desc, result);
      }
      continue;
    }
    if (Array.isArray(arg)) {
      desc = 'array';
      result = `[${arg.join(', ')}]`;
      console.log(desc, result);
      continue;
    }
    if (isPlainObject(arg as AnyObject)) {
      desc = 'plain object';
      result = arg;
      console.log(desc, result);
      continue;
    }
    try {
      desc = 'JSON?';
      result = getJSON(arg);
      console.log(desc, result);
    } catch (e) {
      error = String(e);
      console.error('Error:', e);
    }
  }
  return {
    description: desc,
    desc,
    result,
    error,
  };
}

type CharLength = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export function randomChars(len: CharLength = 8) {
  if (len > 8) {
    console.warn('String can be no longer than 8 characters');
    len = 8;
  }
  // start index for slice
  const i = 2;
  return Math.random().toString(36).slice(i, i + 2);
}

export function randomString(len = 8, prefix = '') {
  let str = prefix || '';
  while (str.length < len) {
    str += randomChars(len as CharLength);
  }
  return str;
}

type RandomIdOpts = {
  partLen?: CharLength;
  partLength?: CharLength;
  partCount?: number;
  parts?: number[];
  prefix?: string;
  sep?: string;
} | [number, number];

/**
 * Generate a random id with optional prefix and separator
 * @example randomId(); // -> 'id-edf73k-x-c4n7x6'
 * @example randomId([3, 8]); // -> 'id-3984hu74-sdlk7434k-dfkjj48sh'
 * @example randomId([2, 5], 'x', ''); // -> 'x1fg8d9gs6k'
 * @param {Array<number, number> | Object} [$opts]
 * @param {string} [$prefix]
 * @param {string} [$sep]
 * @returns {string}
 */
export function randomId($opts: RandomIdOpts, $prefix?: string, $sep?: string): string {
  let partCount = 2;
  let partLength = 6;
  let prefix = $prefix ?? 'id';
  let sep = $sep ?? '-';

  if (Array.isArray($opts)) {
    [ partCount = 2, partLength = 6 ] = $opts;
  } else {
    // let partLen, parts;
    partCount = $opts.partCount ?? ($opts.parts != null ? $opts.parts[0] : partCount);
    partLength = $opts.partLength ?? $opts.partLen ?? ($opts.parts != null ? $opts.parts[1] : partLength);
    prefix = $opts.prefix ?? prefix;
    sep = $opts.sep ?? sep;
  }

  let idParts: string[] = [ prefix ];
  let counter = 0;

  while (++counter <= partCount) {
    idParts.push(randomString(partLength as CharLength));
  }

  console.log(idParts);

  return idParts.join(sep);
}

/**
 * Convert a dot-notation object path to an actual object (with optional value)
 * @param {string} path
 * @param {Object} obj
 * @param {*} value
 * @param {string|RegExp} sep
 */
export function objectFromPath(path: string, obj: AnyObject = {}, value: any = {}, sep: SplitValue = '.') {
  const parts = path.split(sep);
  const last = parts.pop() as string;
  const out = { ...obj };
  // @ts-ignore - this is actually confusing
  parts.reduce((o, k) => {
    if (o[k] == null) return o[k] = {};
    // else...
    return o[k] = isPlainObject(o[k]) ? o[k] : { _: o[k] };
  }, out)[last] = value;
  return out;
}

export function parseObjectPath(path: string, obj: AnyObject = {}, value: any = {}, sep: SplitValue = '.') {
  let out = obj;
  let parts = String(path).split(sep);
  let isLast = false;
  parts.forEach((k, i) => {
    isLast = (i < parts.length - 1)
    if (isLast) {
      if (out[k] == null) {
        out[k] = {};
      } else if (!isPlainObject(out[k])) {
        out[k] = { _: out[k] };
      } else {
        out[k] = out[k];
      }
      out = out[k] as AnyObject;
    } else {
      out[k] = value;
    }
  });
  return obj;
}
