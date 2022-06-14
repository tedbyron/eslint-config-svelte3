<div align="center">
  <h1><code>eslint-config-svelte3</code></h1>
  <p><strong>ESLint config for Svelte 3 with StandardJS and TypeScript</strong></p>
</div>

```
npm i -D @tedbyron/eslint-config-svelte3
yarn add -D @tedbyron/eslint-config-svelte3
pnpm add -D @tedbyron/eslint-config-svelte3
```

`.eslintrc.js`:

```js
module.exports = {
  extends: '@tedbyron/eslint-config-svelte3',
  parserOptions: {
    project: './tsconfig.json'
  }
}
```
