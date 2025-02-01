import React from 'react'
import photo from '../../assets/photo.jpg';
import { Col, Card, Container, Row } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

interface Qualification {
  "title": string,
  "from": string,
  "to": string,
  "institute": string,
  "scores": string,
  "description": string
}

interface Introduction {
  title: string,
  content: string,
};

const TutorAboutMe = () => {
  const t = useTranslations('tutor_about_me');
  // const intro = t('introduction', { returnObjects: true }) as Introduction[];
  // const qualis = t('qualifications', { returnObjects: true }) as Qualification[];
  const intro = t.raw('introduction') as Introduction[];
  const qualis = t.raw('qualifications') as Qualification[];
  return (
    <div>
      <h1>{t('title')}</h1>
      <Container>
        <Row>
          <Col className="p-0 d-flex justify-content-center" md={{ span: 12, order: 1 }} >
            <Card.Img src={photo} style={{ width: "100%", height: "auto", maxWidth: "320px" }} />
          </Col>
          <Col className="p-0" md={{ span: 12, order: 1 }} >
            <Card>
              {qualis.map((q) => {
                const { title, from, to, institute, description, scores } = q;
                return (
                  <div key={title}>
                    <Card.Title>{title}</Card.Title>
                    <div className="px-4">
                    <Card.Subtitle>{institute}</Card.Subtitle>
                    <h6>{scores}</h6>
                    <h6>{from} - {to}</h6>
                    <p style={{ whiteSpace: "pre-line" }}>{description}</p>
                    </div>
                  </div>
                )
              })}
            </Card>
          </Col>
          <Col className="p-0" md={{ span: 12, order: 1 }} >
            {intro.map(({ title, content }) => {
              return (
                <div key={title}>
                  <h3>{title}</h3>
                  <p style={{ whiteSpace: "pre-line" }}>{content}</p>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TutorAboutMe