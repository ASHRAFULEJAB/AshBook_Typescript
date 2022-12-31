/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors:true
  },
  reactStrictMode: true,
  images: {
    domains: [
      'www.heartresearch.com.au',
      'cdn.pixabay.com',
      'lh3.googleusercontent.com',
      'image.shutterstock.com'
    ],
  },
}

module.exports = nextConfig
