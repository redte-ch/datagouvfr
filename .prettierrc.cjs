const { merge } = require('lodash/fp/object')

const prettierConfigStandard = require('prettier-config-standard')
const sortImports = require('@trivago/prettier-plugin-sort-imports')

const prettierSortImports = {
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  plugins: [sortImports]
}

module.exports = merge(prettierConfigStandard, prettierSortImports)
