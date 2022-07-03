import type { Linter } from 'eslint'

const config: Linter.Config = {
  extends: 'standard-with-typescript',
  plugins: ['svelte3'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.svelte', '.ts']
    },
    'svelte3/typescript': true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      impliedStrict: true
    },
    extraFileExtensions: ['.svelte'],
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2022: true,
    node: true
  }
}

export = config
