/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,

  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com','tailwindui.com'],
    // disableStaticImages: true,
    dangerouslyAllowSVG: true,
}

};

module.exports = nextConfig;
