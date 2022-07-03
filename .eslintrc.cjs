module.exports = {
  extends: './lib/index.js',
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
