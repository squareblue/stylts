/**
 * Utility functions and types. 🤔
 */
import { NumericLiteral } from 'typescript';
import { StyltsArgs } from './stylts';

export { kebabCase } from 'change-case';

export type Whatever = unknown | never;

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

export type AnyObject = {
  [key: string]: Whatever;
}

export type AnyObjectMethods = {
  [key: string]: (...args: Whatever[]) => Whatever;
}

export function objectType(obj: unknown): string {
  return Object.prototype.toString.call(obj);
}

export function isPlainObject(obj: unknown): boolean {
  return objectType(obj) === '[object Object]';
}

export function possiblyJSON(value: unknown): boolean {
  return typeof value === 'string' && /^(\[|\{)/.test(value.trim());
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
    str += randomChars(len as CharLength)
  }
  return str;
}

export function randomId(opts) {
  const {
    partLen = 6,
    partLength = partLen,
    partCount = 2,
    parts = partCount,
    prefix = 'id',
    sep = '-',
  } = opts;

  let idParts: string[] = [prefix];
  let count = 0;

  while (++count <= parts) {
    idParts.push(randomString(partLength as CharLength))
  }

  console.log(idParts);

  return idParts.join(sep);
}

export function toPath(path: string, obj = {}, value = {}) {
  const parts = path.split('.');
  const last = parts.pop() as string;
  const out = {...obj}
  parts.reduce((o, k) => {
    return o[k] = {...o[k]};
  }, out)[last] = value;
  return out;
}
