/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // SEO Redirects: Purane URLs ko naye URLs par bhejne ke liye
  async redirects() {
    return [
      {
        source: '/services/whb',
        destination: '/services/whole-human-blood-dehradun',
        permanent: true, // 301 Permanent Redirect
      },
      {
        source: '/services/prbc',
        destination: '/services/packed-red-blood-cells-dehradun',
        permanent: true,
      },
      {
        source: '/services/sdp',
        destination: '/services/single-donor-platelets-sdp-dehradun',
        permanent: true,
      },
      {
        source: '/services/rdp',
        destination: '/services/random-donor-platelets-dehradun',
        permanent: true,
      },
      {
        source: '/services/ffp',
        destination: '/services/fresh-frozen-plasma-dehradun',
        permanent: true,
      },
      {
        source: '/services/cryo',
        destination: '/services/cryoprecipitate-dehradun',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;