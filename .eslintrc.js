module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  root: true,
  extends: [
    'next',
    'eslint-recommended',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // Javascript rules
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'error',
    'object-shorthand': 'warn',
    'quote-props': ['warn', 'as-needed'],

    // TypeScript rules
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // React rules
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-filename-extension': ['warn', { extensions: ['ts', 'tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
