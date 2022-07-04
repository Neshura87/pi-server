/** @type {import('next').NextConfig} */

const nextConfig = {
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
  },
  reactStrictMode: true,
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};

module.exports = nextConfig