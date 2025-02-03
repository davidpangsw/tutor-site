"use client";
import React from 'react'
import { SUBJECTS } from './config';
import { useTranslations } from 'next-intl';
import { Link } from '@/app/utils/locale/i18n/routing';

const LearnHome = () => {
  const c = useTranslations('common');
  const t = useTranslations('learn');
  return (
      <div>
        <h1>{c('Learn')}</h1>
        <p style={{ whiteSpace: "pre-line" }}>{t('introduction')}</p>
        <ul>
          {SUBJECTS.map((item: { label: string; path: string; }) => {
            const { label, path } = item;
            return <li key={label}><Link href={`/learn/${path}`}>{t(label)}</Link></li>;
          })}
        </ul>
      </div>
  )
}

export default LearnHome