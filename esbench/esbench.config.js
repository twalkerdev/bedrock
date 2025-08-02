import { defineConfig } from 'esbench/host';

export default defineConfig({
  toolchains: [
    {
      include: ['./benchmark/**/*.js'],
    },
  ],
  logLevel: 'debug',
});
