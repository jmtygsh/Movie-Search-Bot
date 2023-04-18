const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.tuk.dev'],
  },

  async redirects() {
    return [
      {
        source: 'https://www.dumb-bots.online',
        destination: '/',
        permanent: true,
      },
      {
        source: 'http://www.dumb-bots.online',
        destination: '/',
        permanent: true,
      },
      {
        source: 'https://www.dumb-bots.online/pricing',
        destination: '/',
        permanent: true,
      },
      {
        source: 'http://www.dumb-bots.online/pricing',
        destination: '/',
        permanent: true,
      },

    ]
  },
}
module.exports = nextConfig;
