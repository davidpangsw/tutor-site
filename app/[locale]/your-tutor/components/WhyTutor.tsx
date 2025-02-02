import React from 'react'
import SummaryCard from '@/app/utils/components/SummaryCard';
import { useTranslations } from 'next-intl';

interface Point {
  bold: string;
  text: string;
}

interface Card {
  title: string;
  description: string;
  points: Point[];
}

interface Translation {
  title: string;
  subtitle: string;
  cards: Card[];
}

const WhyTutor = () => {
  const t = useTranslations('your_tutor_page');
  // const { title, subtitle, cards } = t('whyTutorCard', { returnObjects: true });
  const { title, subtitle, cards } = t.raw('whyTutorCard') as Translation;
  return (
    <div>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <div className="d-flex flex-row flex-wrap justify-content-around align-items-stretch">
        {cards.map((card, index) => (
          <SummaryCard
            key={index}
            className="p-3"
            style={{ width: 500, minHeight: '30rem' }}
            title={card.title}
            description={card.description}
            points={card.points}
          />
        ))}
      </div>
    </div>
  );
}

export default WhyTutor