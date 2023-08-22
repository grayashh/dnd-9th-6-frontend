/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'dnd9th6.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  /* config options here */
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
