import { Header, Counter, setupCounter } from '@local/ui';

import typescriptLogo from '/typescript.svg';
import './style.css';

const counterButtonId = 'counter-button';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: 'Docs' })}
    <div class="card">
      ${Counter(counterButtonId)}
    </div>
  </div>
`;

setupCounter(document.getElementById(counterButtonId)! as HTMLButtonElement);
