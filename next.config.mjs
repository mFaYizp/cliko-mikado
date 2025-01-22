/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["mikado-products.blr1.cdn.digitaloceanspaces.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;
