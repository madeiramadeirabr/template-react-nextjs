/** @type {import('next').NextConfig} */

const path = require('path');
const envs = require('./src/constants/envs');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const reactSvg = require('next-react-svg');

const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [];
  },
  async rewrites() {

    const rewrites = {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
      ],
      // After checking all Next.js pages (including dynamic routes)
      // and static files we proxy any other requests
      fallback: [
      ],
    };
    if (process.env.NEXT_PUBLIC_APP_STAGE === envs.DEVELOPMENT) {
      // eslint-disable-next-line no-console
      console.info('Using  rewrites:', rewrites);
    }
    return rewrites;
  },
};

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [
      reactSvg,
      {
        include: path.resolve(__dirname, './src/static'),
      },
    ],
  ],
  nextConfig
);
