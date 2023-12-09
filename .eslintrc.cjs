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
      files: ['src/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      },
      plugins: ['@typescript-eslint', 'functional']
    }
  ],
  parser: 'espree',
  root: true
}
