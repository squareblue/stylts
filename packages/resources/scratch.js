// pulled from SO http://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
// NOTE: Array.reduce() may not be available in older browsers

/*
let obj = { a: { b: { etc: 5 } } };
function index(obj, i) {
  return obj[i];
}

'a.b.etc'.split('.').reduce();

console.log(index(obj, 'a.b.etc'));
console.log(index(obj, ['a', 'b', 'etc']));	// works with both strings and lists
console.log(index(obj, 'a.b.etc', 123));	// setter-mode - third argument (possibly poor form)
console.log(index(obj, 'a.b.etc'));
*/

import { isPlainObject } from '../dist/utils.js';

(() => {

  let undef;

  let datas = {
    'app.team': 'meh',
    'app.team.instance': 'some value1',
    'app.team.server.obj': 'some value',
    'app.team.app.some': 'some value',
    'app.service.awesome.more': 'more values',
  };

  const res1 = Object.entries(datas).reduce((obj, [key, value]) => {
    let out = obj;
    let parts = String(key).split('.');
    parts.forEach((k, i) => {
      const isLast = (i < parts.length - 1);
      if (isLast) {
        if (out[k] == null) {
          out[k] = {}
        } else if (!isPlainObject(out[k])) {
          out[k] = { _: out[k] }
        } else {
          out[k] = out[k];
        }
        out = out[k];
      } else {
        out[k] = value;
      }
    });
    return obj;
  }, {});

  console.log('res1', JSON.stringify(res1, null, 2));
  console.log('app.team.$', res1.app.team.$)

  return;

  const res2 = datas.reduce((obj, curr) => {
    let keys = curr.key.split('.');
    let cur = obj;
    while (keys.length) {
      const key = keys.shift();
      if (!key) {
        cur[key] = curr.value;
        break;
      }
      cur[key] = cur[key] || {};
      cur = cur[key];
    }
    return curr;
  }, {});

  console.log('res2', JSON.stringify(res2, null, 2));
  console.log(datas);

  function toObject(str, obj = {}, value) {
    let keys = str.split('.');
    let out = {};
    while (keys.length) {
      const key = keys.shift();
      if (!key) break;
      out = Object.assign(out[key] || {}, obj[key] || {}, {
        [key]: obj[key] || {}
      })
    }
    return out;
  }

  console.log(toObject('a.b.c.d.e.f.g', {}, 12345))

  // WINNER!!!!!
  function toObjectReduce(str, obj = {}, value = {}) {
    const path = str.split('.');
    const last = path.pop();
    const o = {...obj};
    path.reduce((p, k) => {
      return p[k] = {...p[k]};
    }, o)[last] = value; // <-- WHY DOES THIS WORK???
    return o;
  }

  function toObjectWhile(str, obj = {}, value = {}) {
    let out = {...obj};
    const path = str.split('.');
    const last = path.pop();
    while (path.length >= 0) {
      const key = path.shift();
      if (!key) {
        out[last] = value;
        break;
      }
      out = Object.assign(out[key] || {}, {
        [key]: obj[key] || {},
      });
      // out[key] = out[key] || {};
      // out = out[key] || out;
    }
    return out;
  }

  console.log(JSON.stringify(toObjectReduce('a.b.c.d.e.f.g', { z: 'foo' }), null, 2));
  console.log(JSON.stringify(toObjectWhile('a.b.c.d.e.f.g', {}, 12345), null, 2));

  // var data = [{ key: 'app.team.instance', value: 'some value1' },
  //   { key: 'app.team.server.obj', value: 'some value' },
  //   { key: 'app.team.app.some', value: 'some value' },
  //   { key: 'app.service.awesome.more', value: 'more values' }];
  const result = (str, val = {}) => {
    var path = str.split('.'),
        last = path.pop();

    var o = {};

    path.reduce((p, k) => {
      return p[k] = p[k] || {};
    }, o)[last] = val;

    return o;

  };

  console.log(result('app.team.instance', 234235));

  const keys = "details1.details2.details3.details4.details5"
  const firsName = "David";

  let tempObject = {};
  let container = tempObject;

  keys.split('.').reduce((k, i, values) => {
    container = (container[k] = (i === (values.length - 1) ? firsName : {}))
  });

  console.log(JSON.stringify(tempObject, null, ' '));

  function toPath(path, obj = {}, value = {}) {
    const parts = path.split('.');
    const last = parts.pop();
    const out = {...obj}
    parts.reduce((o, k) => {
      return o[k] = {...o[k]};
    }, out)[last] = value;
    return out;
  }

  const foo = {
    foo: { bar: {}, bogus: 1 }
  }

  console.log(JSON.stringify(toPath('foo.bar.baz', foo), null, 2));

  function objectPathJS(path = '', obj = {}, value = {}) {
    let out = obj;
    let parts = String(path).split('.');
    parts.forEach((k, i) => {
      const isLast = (i < parts.length - 1);
      if (isLast) {
        if (out[k] === undef) {
          out[k] = {};
        } else if (!isPlainObject(out[k])) {
          out[k] = '() => out[k]';
        } else {
          out[k] = out[k];
        }
        out = out[k];
      } else {
        out[k] = value;
      }
    });
    return obj;
  }

})();
