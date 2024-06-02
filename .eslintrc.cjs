module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '*.cjs', 'vite.config.ts', "postcss.config.js", "tailwind.config.js"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier', '@typescript-eslint', "unused-imports"],
  rules: {
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "unused-imports/no-unused-imports": "warn",
    '@typescript-eslint/no-unused-vars': 'warn',
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "": 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'mjs': 'never'
      }
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
