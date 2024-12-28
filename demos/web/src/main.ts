import { Header, Counter, setupCounter } from '@local/ui';
import { mb, StyleProperties } from 'stylts';
import stylts from 'stylts';
import { m, p, flex, border, rounded, bgColor } from 'stylts/properties';
import { pct, rem, vh, rgb, unit } from 'stylts/units';
import { randomId, arrayConcat } from 'stylts/utils';

import typescriptLogo from '/typescript.svg';
import './style.css';

const styleId = () => randomId({ parts: [2, 8], prefix: 'st', sep: 'x' });

function styleRule(selector: string | string[], properties: StyleProperties[]) {
  return `${arrayConcat(selector).join(' ')} { ${stylts(properties).toString()} }`;
}

const _1_5 = unit(1.5);

// Wrap in an iife to do some JS madness
((elem) => {
  const selectorId = styleId();
  const styleElement = document.createElement('style');

  const _1 = unit(1);
  const $2 = unit(2);
  const $5 = unit(5);
  const $20 = unit(20);

  // styleElement.id = randomId({ partLength: 5, parts: 2, prefix: 'stylts-css', sep: '-'});
  styleElement.id = 'stylts-css';

  const wrapper = [
    m($2.rem),
    p($20.px),
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

  const counterButtonId = randomId({ prefix: 'id' });

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
        ${Counter(counterButtonId)}
      </div>
    </div>
  </div>
`;

  setupCounter(document.getElementById(counterButtonId)! as HTMLButtonElement);

})(document.querySelector('#app'));

// logWhat('string');
// logWhat([ 1, 2, 3, 4, 5, 6 ]);
// logWhat({});
// logWhat(`{ JSON: true }`);

console.log(stylts([
  // margin([rem(2), 10, rem(1), 20]),
  m.auto('y'),
  // @ts-ignore
  m.x.auto,
  m.top(rem(1)),
  mb(_1_5.rem),
  p(5),
  flex.center.xy,
  {
    width: pct.full,
    height: vh.full,
  },
] as StyleProperties[]).resolve());
