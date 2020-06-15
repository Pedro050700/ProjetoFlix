module.exports = {
  env: {
  es6: true,
  jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
  __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
  ecmaFeatures: {
  jsx: true,
  },
  ecmaVersion: 2018,
  sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
  'prettier/prettier': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/jsx-filename-extension': [
  'warn',
  {
  extensions: ['.jsx', '.js'],
  },
  ],
  'import/prefer-default-export': 'off',
  'react/prop-types': 'off',
  'no-console': 'off',
  'no-alert': 'off',
  'react/no-unused-state': 'off',
  'no-param-reassign': 'off',
  },
  settings: {
  'import/resolver': {
  'babel-plugin-root-import': {
  rootPathSuffix: 'src',
  },
  },
  },
  };