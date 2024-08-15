/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', "res.cloudinary.com", "th.bing.com", "images.pexels.com"], // Add other allowed domains if needed
    },
}

module.exports = nextConfig
