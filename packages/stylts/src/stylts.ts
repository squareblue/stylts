import type { AnyObject } from './utils';
import { possiblyJSON, isPlainObject, getJSON } from './utils';

export type Stringable = string | number;
export type StyltsArg = Stringable | AnyObject | unknown[];
export type StyltsArgs = StyltsArg[];

export function stylts(...args: StyltsArgs): void {
  for (const arg of args) {
    if (typeof arg === 'string' || typeof arg === 'number') {
      if (possiblyJSON(arg)) {
        console.log(JSON.parse(arg as string));
      } else {
        console.log(String(arg));
      }
      continue;
    }
    if (Array.isArray(arg)) {
      console.log(`[${arg.join(', ')}]`);
      continue;
    }
    if (isPlainObject(arg as AnyObject)) {
      console.log(arg);
    }
    try {
      getJSON(arg);
    } catch (e) {
      console.error(e);
    }
  }
}
