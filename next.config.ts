import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    // GSAP's JS files have implicit any types that fail strict checking
    ignoreBuildErrors: true
  },
  // TODO: handle remote profile pictures or upload them properly on backend
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'transitivebullsh.it'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/sponsors',
        destination:
          'https://transitive-bs.notion.site/HRG-Sponsor-Info-23fedb27f12480d0ab9ae72669bbcc82',
        permanent: false
      }
    ]
  }
}

export default nextConfig
