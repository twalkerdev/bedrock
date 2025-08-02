// import { defineConfig, ProcessExecutor } from 'esbench/host';

// export default defineConfig({
//   toolchains: [
//     {
//       include: ['./benchmarks/**/*.bench.ts'],
//       executors: [new ProcessExecutor('node --import ts-directly/register')],
//     },
//   ],
//   logLevel: 'debug',
// });

import type { ESBenchConfig, Executor } from 'esbench/host';
import { ProcessExecutor } from 'esbench/host';

// TypeScript config file is also supported.
const executors: Executor[] = [new ProcessExecutor('node')];

export default { toolchains: [{ executors }] } satisfies ESBenchConfig;
