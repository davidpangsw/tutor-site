import { useTranslations } from 'next-intl';
import React from 'react'
import { Card, CardBody, CardHeader, CardSubtitle } from 'react-bootstrap';
import styles from './TutorServiceCard.module.css';

interface Point {
  bold: string;
  text?: string;
}

interface TitlePoint {
  title: string;
  subtitle: string;
  points: Point[];
}

interface Translation {
  title: string;
  titlePoints: TitlePoint[];
}

const TitlePointCard = (titlePoint: TitlePoint, index: React.Key) => {
  return (
    <Card key={index} className={`${styles.serviceCard} roboto`}>
      <CardHeader className={`${styles.cardHeader} roboto-bold`}>
        {titlePoint.title}
      </CardHeader>
      <CardSubtitle className={styles.cardSubtitle}>
        {titlePoint.subtitle}
      </CardSubtitle>
      <CardBody className={styles.cardBody}>
        <ul className={styles.pointsList}>
          {titlePoint.points.map((point, pointIndex: React.Key) => {
            if (!point.bold) return null;
            return (
              <li key={pointIndex} className={styles.pointItem}>
                <span className={`${styles.pointBold} roboto-bold`}>
                  {point.bold}
                </span>
                {point.text && (
                  <span className={styles.pointText}>
                    {point.text}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </CardBody>
    </Card>
  );
};

const TutorServiceCard = () => {
  const t = useTranslations('your_tutor_page');
  const { title, titlePoints } = t.raw('tutor_service_card') as Translation;

  return (
    <div className={styles.serviceCardContainer}>
      <h1 className={`${styles.title} roboto-bold`}>{title}</h1>
      <div className={styles.cardsGrid}>
        {titlePoints.map(TitlePointCard)}
      </div>
    </div>
  );
}

export default TutorServiceCard