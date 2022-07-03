<div align="center">
  <h1><code>eslint-config-svelte3</code></h1>
  <p><strong>ESLint config for Svelte 3 with StandardJS and TypeScript</strong></p>
</div>

```
npm i -D @tedbyron/eslint-config-svelte3
yarn add -D @tedbyron/eslint-config-svelte3
pnpm add -D @tedbyron/eslint-config-svelte3
```

`.eslintrc.cjs`:

```js
module.exports = {
  extends: '@tedbyron/eslint-config-svelte3',
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  }
}
```

If using the VSCode ESLint extension, add `svelte` to the `eslint.validate` setting:

```JSON
"eslint.validate": ["javascript", "javascriptreact", "svelte"]
```
