import { useTranslations } from 'next-intl';
import React from 'react'
import { Card } from 'react-bootstrap';

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

const TutorServiceCard = (props: any) => {
  const t = useTranslations('your_tutor_page');

  const { title, titlePoints } = t('tutorServiceCard', { returnObjects: true }) as Translation;

  return (
    <div>
      <h1>{title}</h1>
      <div className="px-0 d-flex flex-row flex-wrap justify-content-center align-content-around">
        {titlePoints.map((titlePoint, index: React.Key) => (
          <Card
            key={index}
            className="m-3 roboto text-wrap justify-content-center"
            bg={"primary"}
            text={"light"}
            style={{ width: 320, height: 500, fontSize: "1.2rem" }}
          >
            <Card.Header className="roboto-bold text-center">{titlePoint.title}</Card.Header>
            <Card.Subtitle className="m-3">{titlePoint.subtitle}</Card.Subtitle>
            <Card.Body>
              <ul className="p-0">
                {titlePoint.points.map((point, index: React.Key) => (
                  <li key={index} style={{listStyle: 'none'}}>
                    <strong className="roboto-bold">{point.bold}</strong>
                    <span>
                      {point.text ? ' : ' : ''}
                      {point.text}
                    </span>
                  </li>
                ))
                }
              </ul>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TutorServiceCard