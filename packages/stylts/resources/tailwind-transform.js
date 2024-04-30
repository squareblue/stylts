// import fs from 'node:fs';
import tailwindClasses from './tailwind-classes.js';
import { snakeCase } from 'change-case';

(() => {
  const tailwindClassesSorted = tailwindClasses.toSorted();

  // OUTPUT SORTED
  // console.log(JSON.stringify(tailwindClasses.toSorted(), null, 2));

  // OUTPUT OBJECT WITH snake_case PROPERTIES
  const snakedObject = () => tailwindClasses.reduce((obj, cls) => {
    obj[snakeCase(cls)] = cls;
    return obj;
  }, {});
  console.log(JSON.stringify(snakedObject(), null, 2));

  // fs.writeFileSync('tailwind-classes-sorted-object.json', JSON.stringify(snakedSorted));
  // console.log(JSON.stringify(snakedSorted(), null, 2));

  // OUTPUT snake_case OBJECT with SORTED PROPERTIES
  const snakedSorted = () => tailwindClassesSorted.reduce((obj, cls) => {
    obj[snakeCase(cls)] = cls;
    return obj;
  }, {});

  // fs.writeFileSync('tailwind-classes-sorted-object.json', JSON.stringify(snakedSorted));
  // console.log(JSON.stringify(snakedSorted(), null, 2));

  return;

  function toPath(path, obj = {}, value = {}) {
    if (path.startsWith('backdrop')) {
      // console.log(path);
    }
    const parts = path.split('.');
    const last = parts.pop();
    const out = {...obj}
    parts.reduce((o, k) => {
      const oo = o[k] = o[k] || {};
      return oo
    }, out)[last] = value;
    return out;
  }

  function hyphened(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }

  function cameled(str) {
    return str.replace(/(-[a-z])/g, (match) => `.$${match}`)
  }

  function toDot(cls) {
    const dotted = cls.split('-').map(part => {
      let out = part;
      out = out.replace(/[./]/g, '_');
      out = out.replace(/^\d/, (match) => '$' + match);
      return out;
    }).join('.')
    // console.log(dotted)
    return dotted;
  }

  const tailwindProperties = () => tailwindCSS.toSorted().slice(200, 300).reduce((obj, cls) => {
    // obj[camelCase(cls).replace(/_/g, '_')] = cls;
    // obj[snakeCase(cls)] = cls;
    obj[cameled(cls)] = cls;
    return obj;
  }, {});

  const outputProperties = () => '// Auto-generated file. Do not edit.' +
    '\n\n' +
    'const tailwindProperties = ' +
    JSON.stringify(tailwindProperties(), null, 2) +
    ';';

  // console.log(outputProperties() + '\n\n');

  const tailwindObjects = () => Array.from(new Set(tailwindCSS)).toSorted().slice(200, 500).reduce((obj, cls) => {
    // ??? SKIP CLASSES WITH DECIMALS AND SLASHES ???
    // if (/[./]/.test(cls)) {
    //   return;
    // }
    return toPath(
      // cls.replace(/[^a-z0-9/-]+/gi, '$').replace(/-/g, '.'),
      toDot(cls),
      // (cameled(cls.replace(/-\d/g, (match) => {
      //     const replaced = '.$' + match;
      //     // console.log(replaced);
      //     return replaced;
      // })).replace(/_/g, '.$')),
      obj,
      cls,
    );
  }, {});

  const outputObjects = () => '// Auto-generated file. Do not edit.\n' +
    'const tailwindObjects = ' +
    JSON.stringify(tailwindObjects(), null, 2) +
    ';'

  // console.log(outputObjects() + '\n');
})();
