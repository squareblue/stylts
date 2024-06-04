import { Header } from '@local/ui/header';
import { Counter } from '@local/ui/counter';
import { setupCounter } from '@local/ui/setup-counter';
import stylts, { type StyleProperties, flex, border, rounded, bgColor } from 'stylts';
import { m, margin, mxAuto, pad, padding } from 'stylts/properties';
import { pct, rem, vh, rgb, unit } from 'stylts/units';
import { randomId, arrayConcat } from 'stylts/utils';

import typescriptLogo from '/typescript.svg';
import './style.css';

const styleId = () => randomId({ parts: [2, 6], prefix: 'stl', sep: '-' });

function styleRule(selector: string | string[], properties: StyleProperties[]) {
  return `${arrayConcat(selector).join(' ')} { ${stylts(properties).toString()} }`;
}

const _1_5 = unit(1.5);

// Wrap in an iife to do some JS madness
((elem) => {
  const selectorId = styleId();
  const styleElement = document.createElement('style');

  const _1 = unit(1);
  const _2 = unit(2);
  const _5 = unit(5);
  const $20 = unit(20);

  // styleElement.id = randomId({ partLength: 5, parts: 2, prefix: 'stylts-css', sep: '-'});
  styleElement.id = 'stylts-css';

  const wrapper = [
    m(_2.rem),
    pad($20.px),
    { backgroundColor: 'cornflowerblue' },
    { color: rgb(255, 0, 64) },
  ];

  styleElement.insertAdjacentText('beforeend', [
    styleRule(`#${selectorId}`, [
      border.lightGray,
      rounded.xl,
    ]),
    styleRule(`#${selectorId} .card`, [
      bgColor('cornflowerblue'),
      rounded.lg,
      { opacity: 0.5 },
    ]),
  ].join('\n'));

  document.head.insertAdjacentElement('beforeend', styleElement);

  elem.innerHTML = `
  <div>
    <div id="${selectorId}">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      ${Header({ title: 'Web' })}
      <div class="card">
        ${Counter()}
      </div>
    </div>
  </div>
`;
})(document.querySelector('#app'));

setupCounter(document.querySelector('#counter')!);

// logWhat('string');
// logWhat([ 1, 2, 3, 4, 5, 6 ]);
// logWhat({});
// logWhat(`{ JSON: true }`);

console.log(stylts([
  // margin([rem(2), 10, rem(1), 20]),
  mxAuto,
  // @ts-ignore
  margin.x.auto,
  margin.top(rem(1)),
  m.b(_1_5.rem),
  padding(5),
  flex.center.xy,
  {
    width: pct.full,
    height: vh.full,
  },
] as StyleProperties[]).resolve());
