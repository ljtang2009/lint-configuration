import { defineConfig } from 'vite';
import { join } from 'desm';

const entry = join(import.meta.url, 'src/index.ts');

export default defineConfig({
  resolve: {
    alias: {
      '@': join(import.meta.url, 'src'),
    },
  },
  build: {
    outDir: join(import.meta.url, 'dist'),
    sourcemap: true,
    lib: {
      entry,
      name: 'LintConfig',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        '@stylistic/eslint-plugin',
        '@stylistic/eslint-plugin-plus',
        '@stylistic/eslint-plugin-js',
        '@stylistic/eslint-plugin-ts',
        '@typescript-eslint/parser',
        'typescript-eslint',
        'jsonc-eslint-parser',
        'eslint-plugin-jsonc',
        'stylelint-config-clean-order',
        'stylelint-prettier',
        'confusing-browser-globals',
        'eslint-plugin-jest',
      ],
      output: {
        globals: {
          '@stylistic/eslint-plugin': 'stylisticEslintPlugin',
          '@stylistic/eslint-plugin-plus': 'stylisticEslintPluginPlus',
          '@stylistic/eslint-plugin-js': 'stylisticEslintPluginJs',
          '@stylistic/eslint-plugin-ts': 'stylisticEslintPluginTs',
          '@typescript-eslint/parser': 'typescriptEslintParser',
          'typescript-eslint': 'tseslint',
          'jsonc-eslint-parser': 'jsoncEslintParser',
          'eslint-plugin-jsonc': 'jsoncEslintPlugin',
          'stylelint-config-clean-order': 'stylelintConfigCleanOrder',
          'stylelint-prettier': 'stylelintPrettier',
          'confusing-browser-globals': 'confusingBrowserGlobals',
          'eslint-plugin-jest': 'eslintPluginJest',
        },
        preserveModules: true,
      },
    },
    ssr: true,
    minify: false,
    emptyOutDir: false,
  },
});
