/** @type {import('next').NextConfig} */
const { rewrites } = require('./rewrite.config')
const nextConfig = {
  reactStrictMode: true,
  rewrites
}

module.exports = nextConfig
