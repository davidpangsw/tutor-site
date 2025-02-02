import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../utils/locale/i18n/routing';
import MyNav from './components/Nav/MyNav';

import '@/public/assets/styles/index.css';
import '@/public/assets/styles/cosmo/bootstrap.min.css';
import '@/public/assets/styles/google-fonts.css';
import { ContactProvider } from '../utils/contacts/ContactContext';

export default async function LocaleLayout(context: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const children = context.children;
  const { locale } = await context.params; // From nextjs 15 params are asynchronous

  // Ensure that the incoming `locale` is valid
  if (!(locale as keyof (typeof routing.locales))) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body data-bs-theme=''>
        <NextIntlClientProvider messages={messages}>
          <ContactProvider>
            <div className={`App vw-100 min-vh-100 d-flex flex-column roboto-light`}>
              <MyNav />
              {children}
            </div>
          </ContactProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}