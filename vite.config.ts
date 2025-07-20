import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      exclude: [
        'src/vite-env.d.ts',
        'vite.config.ts',
        'eslint.config.js',
        'dist/**',
        'src/models/**',
      ],
      statements: 80,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
});
