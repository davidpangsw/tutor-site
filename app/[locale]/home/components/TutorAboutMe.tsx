import React from 'react'
import { Col, Card, Container, Row, CardSubtitle, CardTitle } from 'react-bootstrap';
import { useTranslations } from 'next-intl';

interface Introduction {
  title: string,
  content: string,
};

interface WorkExperience {
  "title": string,
  "from": string,
  "to": string,
  "description": string
}

interface Qualification {
  "title": string,
  "from": string,
  "to": string,
  "institute": string,
  "scores": string,
  "description": string
}

const TutorAboutMe = () => {
  // const photo = '/assets/photo.jpg';
  const t = useTranslations('your_tutor_page.tutor_about_me');
  const intros = t.raw('introduction') as Introduction[];
  const exps = t.raw('experiences') as WorkExperience[];
  const qualis = t.raw('qualifications') as Qualification[];
  return (
    <div>
      <h1>{t('title')}</h1>
      <Container>
        <Row>
          <Col className="p-0" md={{ span: 12, order: 1 }} >
            {intros.map(({ title, content }) => {
              return (
                <div key={title}>
                  <h3>{title}</h3>
                  <p style={{ whiteSpace: "pre-line" }}>{content}</p>
                </div>
              )
            })}
          </Col>
        </Row>
        <Row>
          <Col className="p-0" md={{ span: 12, order: 1 }} >
            <Card>
              {exps.map((e) => {
                const { title, from, to,  description } = e;
                return (
                  <div key={title}>
                    <CardTitle>{title}</CardTitle>
                    <div className="px-4">
                      <h6>{from} - {to}</h6>
                      <p style={{ whiteSpace: "pre-line" }}>{description}</p>
                    </div>
                  </div>
                )
              })}
            </Card>
            <Card>
              {qualis.map((q) => {
                const { title, from, to, institute, description, scores } = q;
                return (
                  <div key={title}>
                    <CardTitle>{title}</CardTitle>
                    <div className="px-4">
                      <CardSubtitle>{institute}</CardSubtitle>
                      <h6>{scores}</h6>
                      <h6>{from} - {to}</h6>
                      <p style={{ whiteSpace: "pre-line" }}>{description}</p>
                    </div>
                  </div>
                )
              })}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TutorAboutMe