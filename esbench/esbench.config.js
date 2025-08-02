import { defineConfig, ProcessExecutor } from 'esbench/host';

export default defineConfig({
  toolchains: [
    {
      include: ['./benchmark/**/*.js'],
    },
  ],
  logLevel: 'debug',
});
