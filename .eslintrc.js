module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['node_modules/*', '.next/*', 'out/*', 'next.config.js'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '__+', args: 'none' },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    '@next/next/no-img-element': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
