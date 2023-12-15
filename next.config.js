/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      storyblokApiToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
  }
  
  module.exports = nextConfig
