module.exports = {
  'env': {
    'es2020': true,
    'browser': false,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 2020
  },
  'extends': 'eslint:recommended',
  'rules': {
    'no-prototype-builtins': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
