"use client";
import React from 'react'
import { useTranslations } from 'next-intl';
import { Link } from '@/app/utils/locale/i18n/routing';

interface PlaygroundRoute {
  label: string,
  path: string,
}
const routes: PlaygroundRoute[] = [
  {
    label: "Bayesian",
    path: "bayesian",
  },
  {
    label: "Periodic Table",
    path: "periodic-table",
  }
];

const PlaygroundPage = () => {
  // const c = useTranslations('common');
  const t = useTranslations('learn.playground');
  return (
    <div>
      <h1>{t('title')}</h1>
      {/* <p style={{ whiteSpace: "pre-line" }}>{t('introduction')}</p> */}
      <ul>
        {routes.map((item: PlaygroundRoute) => {
          const { label, path } = item;
          return <li key={label}><Link href={`/learn/playground/${path}`}>{t(label)}</Link></li>;
        })}
      </ul>
    </div>
  )
}

export default PlaygroundPage