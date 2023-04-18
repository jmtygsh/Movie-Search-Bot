const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.tuk.dev'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dumb-bots.online',
            startsWith: true,
            not: false
          }
        ],
        destination: 'https://dumb-bots.online/:path*',
        permanent: true,
      },
    ]
  }
}
module.exports = nextConfig;
