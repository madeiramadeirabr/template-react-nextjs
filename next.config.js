/** @type {import('next').NextConfig} */
const { withLayer0, withServiceWorker } = require('@layer0/next/config');
const path = require('path');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const reactSvg = require('next-react-svg');
const envs = require('./src/constants/envs');

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
      fallback: [],
    };
    if (process.env.NEXT_PUBLIC_APP_STAGE === envs.DEVELOPMENT) {
      // eslint-disable-next-line no-console
      console.info('Using  rewrites:', rewrites);
    }
    return rewrites;
  },
};

const plugins = [];

if (process.env.LAYER0 === 'true') {
  plugins.push([withLayer0, { layer0SourceMaps: true }], [withServiceWorker]);
}

module.exports = withPlugins(
  [
    ...plugins,
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
