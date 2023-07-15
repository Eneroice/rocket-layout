module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'linebreak-style': 0,
    'max-len': [
      'error', {
        'code': 100,
      },
    ],
  },
};
