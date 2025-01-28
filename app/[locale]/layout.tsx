import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { routing } from '../../i18n/routing';
import MyNav, { MyNavProps } from '../../components/Nav/MyNav';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();
 
  // const { t } = useTranslation(['common']);
  const t = (s: string) => {return s};
  // const [theme, toggleTheme] = useToggleTheme();
  const myNavProps: MyNavProps = {
    // theme,
    // toggleTheme,
    items: [
      { type: 'link', props: { to: "/", label: t('Home') } },
    ]
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MyNav {...myNavProps} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}