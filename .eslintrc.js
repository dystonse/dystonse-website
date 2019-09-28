module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  plugins: [
    'vue',
    "es-beautifier",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': 'off',
    'semi': 'off',
    'es-beautifier/multiline-array-elements': 'off',
    'comma-dangle': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
