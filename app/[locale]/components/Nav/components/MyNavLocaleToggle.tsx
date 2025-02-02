import { usePathname } from '@/app/utils/locale/i18n/routing';
import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

interface MyNavLocaleToggleItem {
  locale: string,
  title: string,
  text: string,
}

interface MyNavLocaleToggleProps {
  locales: MyNavLocaleToggleItem[],
}

const MyNavLocaleToggle = (props: MyNavLocaleToggleProps) => {
  const {
    locales
  } = props
  const pathname = usePathname(); // Get the current path
  return (
    <div>
      {locales.map(({ locale, title, text }) => (
        <Link key={locale} href={`/${locale}${pathname}`} passHref legacyBehavior>
          <Button className="m-1 rounded" size="sm" title={title}>
            {text}
          </Button>
        </Link>
      ))}
    </div>
  )
}

export type {
  MyNavLocaleToggleItem,
  MyNavLocaleToggleProps,
}
export default MyNavLocaleToggle