import { Link } from '@/app/utils/locale/i18n/routing';
import { useTranslations } from 'next-intl'
import React from 'react'

interface PracticeChapterLinkProps {
  title: string,
  path: string,
}
const chapters: PracticeChapterLinkProps[] = [
  { title: "01. Exponents and Radicals", path: "01-exponents-and-radicals" }
]

const PracticeChapterLink = (props: PracticeChapterLinkProps) => {
  const { title, path } = props;
  return <Link href={`/learn/sat-math/practice/${path}`}>{title}</Link>
}


const SATMathPage = () => {
  const t = useTranslations('learn.sat_math')
  const overview = useTranslations('learn.sat_math.overview')
  const practice = useTranslations('learn.sat_math.practice')
  return (
    <div>
      <h1>{t('title')}</h1>
      <div>
        <h2>{overview('title')}</h2>
        <p>{overview('description')}</p>
        <p>
          <a href={overview('reference.url')} target='_blank'>{overview('reference.url')}</a>
        </p>
        <p>{overview('date')}</p>
      </div>
      <div>
        <h2>{practice('title')}</h2>
        <p>{practice('description')}</p>
        <div>
          {chapters.map((props, index) => {
            return <PracticeChapterLink key={index} {...props} />
          })}
        </div>
      </div>
    </div>
  )
}

export default SATMathPage