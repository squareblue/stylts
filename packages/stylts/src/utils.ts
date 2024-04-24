/**
 * Utility functions and types. 🤔
 */

export type AnyObject = {
  [key: string]: any;
}

// const o: AnyObject = {};

export function objectType(obj: unknown): string {
  return Object.prototype.toString.call(obj);
}
// o.objectType = objectType;

export function isPlainObject(obj: unknown): boolean {
  return objectType(obj) === '[object Object]';
}
// o.isPlainObject = isPlainObject;

export function possiblyJSON(value: unknown): boolean {
  return typeof value === 'string' && /^(\[|\{)/.test(value.trim())
}
// o.possiblyJSON = possiblyJSON;

export function getJSON(value: unknown): string {
  if (possiblyJSON(value)) {
    return value as string;
  }
  if (isPlainObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  return 'null';
}
// o.getJSON = getJSON;

// export const utils = o;
