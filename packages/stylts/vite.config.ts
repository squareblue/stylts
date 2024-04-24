/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true
    }),
  ],
  build: {
    lib: {
      name: 'stylts',
      entry: [
        resolve(__dirname, 'src/stylts.ts'),
        resolve(__dirname, 'src/utils.ts')
      ],
      // fileName: 'stylts',
      formats: [
        'es',
        'cjs',
        // 'umd',
      ],
    },
  },
  test: {},
});
