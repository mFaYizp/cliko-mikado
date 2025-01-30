/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mikado-products.blr1.cdn.digitaloceanspaces.com',
                pathname: '/**',
            },
        ],
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    optimizeCss: true,
};

export default nextConfig;
