import { css, auto, display, m, margin, mb, mr, py, pl, pr, padding } from 'stylts';
import { unit, pxl, rem } from 'stylts/units';
// import { display } from 'stylts/properties';

const u = unit;

const $2rem = unit(2).rem;
const _20px = pxl(20);
const _10 = unit(10);

const styltsExample = css([
  display.inline,     // display: inline;
  margin.top($2rem),  // margin-top: 2rem;
  mb.u8,              // margin-bottom: 2rem  // (preset; uses Tailwind-like unit scale: 1 = 0.25rem)
  m.left(auto),       // margin-left: auto;
  mr(_20px),          // margin-right: 20px;
  pl(rem(2)),         // padding-left: 2rem;
  pr(unit(2).rem),    // padding-right: 2rem;
  py(_10.px),         // padding-top: 10px; padding-bottom: 10px;
  { fontSize: u(1.2).rem },   // style objects can be used
  { 'line-height': '1.5' },   // kebab-style property names work too; must use string for unitless values
]);
// style="display:inline;margin-top:2rem;margin-bottom:2rem;margin-left:auto;margin-right:20px;padding-left:2rem;padding-right:2rem;padding-top:10px;padding-bottom:10px;"
// tailwind equivalent
// class="inline mt-8 mb-8 ml-auto mr-auto pl-8 pr-8 py-[10px] font-[1.2rem] leading-[1.5]"

export function Header({ title }: { title: string }) {
  const _2rem = u(2).rem;
  const _20px = u.px(20);

  // rewriting the example above:
  const style = css([
    display.inline,
    margin(_2rem, _20px, _2rem, auto),   // use multiple arguments or array for shorthand [top, right, bottom, left]
    padding('10px 2rem'),                 // use shorthand string (not type safe)
    { fontSize: u(1.2).rem, lineHeight: '1.5' },
  ]);

  const styleAttr = style.attr;
  // style="display: inline; margin: 2rem 20px 2rem auto; padding: 10px 2rem; font-size:1.2rem; line-height: 1.5;"

  return `
    <header id="header" style="${styleAttr}">
      <h1>${title}</h1>
    </header>
    `;
}
