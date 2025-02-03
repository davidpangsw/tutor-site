import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./app/utils/locale/i18n/request.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale',
        destination: '/:locale/home',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
