/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 주의: '/저장소이름' 부분을 실제 GitHub Repository 이름(예: /dev-jobs-2025)으로 꼭 바꿔야 합니다!
  basePath: '/TECH-TRENDS',
  assetPrefix: '/TECH-TRENDS', // assetPrefix 입니다. (assert 아님)
};

export default nextConfig;