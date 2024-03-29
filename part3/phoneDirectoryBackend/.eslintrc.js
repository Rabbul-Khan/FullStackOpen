module.exports = {
  env: {
    commonjs: true,

    es2021: true,

    node: true,
  },

  plugins: ['@stylistic/js'],

  extends: 'eslint:recommended',

  overrides: [],

  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    '@stylistic/js/indent': ['error', 2],

    '@stylistic/js/linebreak-style': ['error', 'windows'],

    '@stylistic/js/quotes': ['error', 'single'],

    '@stylistic/js/semi': ['error', 'always'],

    eqeqeq: 'error',

    'no-trailing-spaces': 'error',

    'object-curly-spacing': ['error', 'always'],

    'arrow-spacing': ['error', { before: true, after: true }],

    'no-console': 0,
  },
};
