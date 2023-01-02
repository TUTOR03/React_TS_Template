module.exports = {
  plugins: [require.resolve('prettier-plugin-organize-imports')],
  organizeImportsSkipDestructiveCodeActions: true,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  trailingComma: 'all',
}
