/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "uploadthing.com"
        ],remotePatterns: [
            {
              protocol: 'https',
              hostname: 'utfs.io', 
            },
          ],
    }
}

module.exports = nextConfig
