const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `prefix_${hash}`,
})

module.exports = withVanillaExtract({
  reactStrictMode: true,
})
