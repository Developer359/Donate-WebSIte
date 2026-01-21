/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
    return [
      {
        source: '/',
        destination: '/Pages/Home',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
