import React from 'react'
import { Col, Card, Container, Row, CardSubtitle, CardTitle } from 'react-bootstrap';
import { useTranslations } from 'next-intl';
import styles from './TutorAboutMe.module.css';

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
    <div className={styles.aboutMeContainer}>
      <h1 className={styles.title}>{t('title')}</h1>
      <Container>
        <Row>
          <Col className="p-0" md={{ span: 12, order: 1 }} >
            <div className={styles.introductionSection}>
              {intros.map(({ title, content }) => {
                return (
                  <div key={title} className={styles.introItem}>
                    <h3 className={styles.introTitle}>{title}</h3>
                    <p className={styles.introContent}>{content}</p>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="p-0" md={{ span: 12, order: 1 }} >
            <Card className={styles.experienceCard}>
              <div className={styles.cardContent}>
                {exps.map((e) => {
                  const { title, from, to,  description } = e;
                  return (
                    <div key={title} className={styles.itemContainer}>
                      <CardTitle className={styles.itemTitle}>{title}</CardTitle>
                      <div className={styles.itemMeta}>{from} - {to}</div>
                      <p className={styles.itemDescription}>{description}</p>
                    </div>
                  )
                })}
              </div>
            </Card>
            <Card className={styles.qualificationCard}>
              <div className={styles.cardContent}>
                {qualis.map((q) => {
                  const { title, from, to, institute, description, scores } = q;
                  return (
                    <div key={title} className={styles.itemContainer}>
                      <CardTitle className={styles.itemTitle}>{title}</CardTitle>
                      <CardSubtitle className={styles.itemSubtitle}>{institute}</CardSubtitle>
                      <div className={styles.itemScores}>{scores}</div>
                      <div className={styles.itemMeta}>{from} - {to}</div>
                      <p className={styles.itemDescription}>{description}</p>
                    </div>
                  )
                })}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TutorAboutMe