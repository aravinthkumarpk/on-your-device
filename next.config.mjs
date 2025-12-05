/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "sharp": false,
      "onnxruntime-node$": false,
    }

    // Allow importing .wasm files
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }

    // Handle worker files
    if (!isServer) {
      config.output.publicPath = `/_next/`;
      config.output.globalObject = 'self';
    }

    return config;
  },
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
