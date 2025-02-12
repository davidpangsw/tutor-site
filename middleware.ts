import createMiddleware from 'next-intl/middleware';
import { routing } from '@/app/utils/locale/i18n/routing';

export default createMiddleware(routing);
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(en|zh-hant|zh-hans)/:path*`]
};