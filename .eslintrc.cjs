module.exports = {
  extends: ['eslint-config-standard', 'prettier'],
  overrides: [
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser'
    },
    {
      extends: [
        'plugin:functional/recommended',
        'plugin:functional/stylistic',
        'standard',
        'prettier'
      ],
      files: ['src/**/*.js', 'src/**/*.cjs', 'src/**/*.mjs'],
      plugins: ['functional']
    },
    {
      extends: [
        'plugin:functional/external-typescript-recommended',
        'plugin:functional/recommended',
        'plugin:functional/stylistic',
        'standard-with-typescript',
        'prettier'
      ],
      files: ['src/**/*.ts', 'tests/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.test.json',
        tsconfigRootDir: __dirname
      },
      plugins: ['@typescript-eslint', 'functional'],
      rules: {
        'functional/prefer-immutable-types': 'off',
        'functional/no-mixed-types': 'off'
      }
    },
    {
      files: ['**/*.test.ts'],
      rules: {
        'functional/no-expression-statements': 'off',
        'functional/no-return-void': 'off'
      }
    }
  ],
  parser: 'espree',
  root: true
}
