import { useTranslations } from 'next-intl';
import React from 'react';
import { Card, Row, Col, Container, CardBody, CardHeader } from 'react-bootstrap';
import styles from './TutorPriceCard.module.css';

const OneToOneServiceCard = () => {
  const t = useTranslations('your_tutor_page.tutorPriceCard.oneToOneServiceCard');
  const price = "70";
  const discount = "50";
  const minHours = 1.5;
  return (
    <Card className={`${styles.serviceCard} p-0`}>
      <CardHeader className={styles.cardHeader}>
        {t('title')}
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <h5 className={styles.priceText}>
          {t('body', { price, discount, minHours })}
        </h5>
      </CardBody>
    </Card>
  );
}

const OneToTwoServiceCard = () => {
  const t = useTranslations('your_tutor_page.tutorPriceCard.oneToTwoServiceCard');
  const price = "100";
  const discount = "50";
  const minHours = 1.5;
  return (
    <Card className={`${styles.serviceCard} p-0`}>
      <CardHeader className={styles.cardHeader}>
        {t('title')}
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <h5 className={styles.priceText}>
          {t('body', { price, discount, minHours })}
        </h5>
      </CardBody>
    </Card>
  );
}

const TutoringCenterEmploymentCard = () => {
  const t = useTranslations('your_tutor_page.tutorPriceCard.tutoringCenterEmploymentCard');
  return (
    <Card className={`${styles.serviceCard} p-0`}>
      <CardHeader className={styles.cardHeader}>
        {t('title')}
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <h5 className={styles.priceText}>
          {t('body')}
        </h5>
      </CardBody>
    </Card>
  );
}

const TutorPriceCard = () => {
  // const c = useTranslations('common');
  const t = useTranslations('your_tutor_page.tutorPriceCard');
  return (
    <div className={styles.priceCardContainer}>
      <h1 className={styles.title}>{t('title')}</h1>
      <Card className={styles.mainCard}>
        <Container>
          <Row className={styles.servicesGrid}>
            <Col>
              <OneToOneServiceCard />
            </Col>
            <Col>
              <OneToTwoServiceCard />
            </Col>
            <Col>
              <TutoringCenterEmploymentCard />
            </Col>
            {/* <Col
              md={6}
            >
              <p>{t('extraCostDepends')}</p>
              <ul className='list-group'>
                <li className='list-group-item'>{c('Grade')}</li>
                <li className='list-group-item'>{c('Schedule')}</li>
                <li className='list-group-item'>{c('Location')} / {c('Online')}</li>
                <li className='list-group-item'>{c('SessionLength')}</li>
                <li className='list-group-item'>{c('Subject')}</li>
              </ul>
            </Col> */}
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default TutorPriceCard