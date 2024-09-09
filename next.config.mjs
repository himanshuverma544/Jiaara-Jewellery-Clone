/** @type {import('next').NextConfig} */

const nextConfig = {

  webpack(config, { dev }) {
    if (dev) {
      config.ignoreWarnings = [
        {
          module: /react-carousel\.es\.css\.map$/,
        },
        {
          message: /Image with src .* has "fill" and parent element with invalid "position"/,
        }
      ];
    }
    return config;
  }
};

export default nextConfig;
