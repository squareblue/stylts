import { Header } from '@local/ui/header';
import './style.css';
import typescriptLogo from '/typescript.svg';
import { Counter } from '@local/ui/counter';
import { setupCounter } from '@local/ui/setup-counter';
import { stylts } from 'stylts';
import { isPlainObject } from 'stylts/utils';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
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
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

stylts('string');
stylts(['array', 1, 2, 3, 4, 5, 6]);
stylts({ 'isPlainObject': isPlainObject({}) });
// stylts(`{ JSON: true }`);
