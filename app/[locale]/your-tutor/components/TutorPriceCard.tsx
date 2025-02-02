import { useTranslations } from 'next-intl';
import React from 'react';
import { Card, Row, Col, Container, CardBody, CardHeader } from 'react-bootstrap';

const OneToOneServiceCard = () => {
  const t = useTranslations('your_tutor_page.tutorPriceCard.oneToOneServiceCard');
  const price = "35";
  const minHours = 1.5;
  return (
    <Card className='p-0'>
      <CardHeader>
        {t('title')}
      </CardHeader>
      <CardBody>
        <h5>
          {t('body', { price, minHours })}
        </h5>
      </CardBody>
    </Card>
  );
}

const OneToTwoServiceCard = () => {
  const t = useTranslations('your_tutor_page.tutorPriceCard.oneToTwoServiceCard');
  const price = "53";
  const minHours = 1.5;
  return (
    <Card className='p-0'>
      <CardHeader>
        {t('title')}
      </CardHeader>
      <CardBody>
        <h5>
          {t('body', { price, minHours })}
        </h5>
      </CardBody>
    </Card>
  );
}

const TutoringCenterEmploymentCard = () => {
  const t = useTranslations('your_tutor_page.tutorPriceCard.tutoringCenterEmploymentCard');
  return (
    <Card className='p-0'>
      <CardHeader>
        {t('title')}
      </CardHeader>
      <CardBody>
        <h5>
          {t('body')}
        </h5>
      </CardBody>
    </Card>
  );
}

const TutorPriceCard = () => {
  const c = useTranslations('common');
  const t = useTranslations('your_tutor_page.tutorPriceCard');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Card className="p-3">
        <Container>
          <Row>
            <Col
              md={6}
            >
              <Row className='p-3'><OneToOneServiceCard /></Row>
              <Row className='p-3'><OneToTwoServiceCard /></Row>
              <Row className='p-3'><TutoringCenterEmploymentCard /></Row>
            </Col>
            <Col
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
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default TutorPriceCard