/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode
    swcMinify: true, // Enables SWC minification for faster builds
    images: {
      domains: ['img.youtube.com'], // Allow images from specified domains
    },
    // Add any additional configuration options here
  };
  
  export default nextConfig;
  