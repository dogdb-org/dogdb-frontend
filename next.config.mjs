/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Image optimization configuration
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Adjust if necessary for the protocol
                hostname: 'via.placeholder.com',
                pathname: '**', // Matches all paths under 'via.placeholder.com'
            },
        ],
    },
}

export default nextConfig
