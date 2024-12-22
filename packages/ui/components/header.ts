import stylts, { display, margin, mt, mx, pxl, pY } from 'stylts';
// import { px, rem } from 'stylts/units';
// import { display } from 'stylts/properties';

export function Header({ title }: { title: string }) {
  const style = stylts([
    mt(50),
    pxl(20),
    pY(50),
    // @ts-ignore
    mx.auto,
    display.inline,
    margin.top(40)
  ]);

  return `
    <header id="header" style="${style.attr}">
      <h1>${title}</h1>
    </header>
    `;
}
