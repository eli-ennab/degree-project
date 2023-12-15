/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
    env: {
      storyblokApiToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
  }
  
  module.exports = withVanillaExtract(nextConfig)
