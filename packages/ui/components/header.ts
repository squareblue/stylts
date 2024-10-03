import stylts, { display, margin, mT, mX, pX, pY } from 'stylts';
// import { px, rem } from 'stylts/units';
// import { display } from 'stylts/properties';

export function Header({ title }: { title: string }) {
  const style = stylts([
    mT(50),
    pX(20),
    pY(50),
    // @ts-ignore
    mX('auto'),
    display.inline,
    margin.top(40)
  ]);

  return `
    <header id="header" style="${style.attr}">
      <h1>${title}</h1>
    </header>
    `;
}
