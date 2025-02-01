import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./app/utils/locale/i18n/request.ts');

const nextConfig: NextConfig = {
};

export default withNextIntl(nextConfig);
