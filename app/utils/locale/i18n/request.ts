import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }


  const messages = {
    'common': (await import(`../messages/${locale}/common.json`)).default,
    'nav': (await import(`../messages/${locale}/nav.json`)).default,
    'contact_card': (await import(`../messages/${locale}/contact_card.json`)).default,
    'home_page': (await import(`../messages/${locale}/home_page.json`)).default,
    'your_tutor_page': {
      ...(await import(`../messages/${locale}/your_tutor_page.json`)).default,
      'tutor_about_me': (await import(`../messages/${locale}/your_tutor_page/tutor_about_me.json`)).default,
    },
    // 'learn': (await import(`../messages/${locale}/learn.json`)).default,
  };
  // console.log(messages)

  return {
    locale,
    messages,
  };
});