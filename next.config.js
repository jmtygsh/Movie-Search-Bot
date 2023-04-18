const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.tuk.dev'],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://dumb-bots.online/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dumb-bots.online',
            startsWith: true,
            not: false
          }
        ],
        statusCode: 301
      }
    ]
  }
}

module.exports = nextConfig;
