module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: { version: '18.2' },
    'import/parsers': { '@typescript-eslint/parser': [".ts", ".tsx"] },
    'import/resolver': { 'typescript': { 'project': './tsconfig.json' } },
  },
  plugins: ['@typescript-eslint', 'react', 'import', 'react-hooks', 'react-refresh'],
  rules: {
    'curly': 'warn',
    'no-console': 'warn',
    'no-unused-expressions': 'warn',
    'import/no-unresolved': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: { order: 'asc' },
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
