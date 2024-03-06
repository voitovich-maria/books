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
    'curly': 'error',
    'no-console': 'warn',
    'no-unused-expressions': 'error',
    'import/no-unresolved': 'error',
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
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-no-useless-fragment': 'error',
    'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
    "@typescript-eslint/no-misused-promises": ['error', { checksVoidReturn: false }]
  },
};
