/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                destination: 'https://discord.gg/PaVYAuymgm',
                permanent: false,
                source: '/discord',
            },
        ];
    },
    swcMinify: true,
};

export default nextConfig;
