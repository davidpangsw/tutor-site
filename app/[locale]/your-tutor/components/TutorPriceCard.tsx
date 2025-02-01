import { useTranslations } from 'next-intl';
import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

const OneToOneServiceCard = (props: any) => {
  const t = useTranslations('your_tutor_page');
  const price = "35";
  const minHours = 1.5;
  return (
    <Card className='p-0'>
      <Card.Header>
        {t('tutorPriceCard.oneToOneServiceCard.title')}
      </Card.Header>
      <Card.Body>
        <h5>
          {t('tutorPriceCard.oneToOneServiceCard.body', { price, minHours })}
        </h5>
      </Card.Body>
    </Card>
  );
}

const OneToTwoServiceCard = (props: any) => {
  const t = useTranslations('your_tutor_page');
  const price = "53";
  const minHours = 1.5;
  return (
    <Card className='p-0'>
      <Card.Header>
        {t('tutorPriceCard.oneToTwoServiceCard.title')}
      </Card.Header>
      <Card.Body>
        <h5>
          {t('tutorPriceCard.oneToTwoServiceCard.body', { price, minHours })}
        </h5>
      </Card.Body>
    </Card>
  );
}

const TutoringCenterEmploymentCard = (props: any) => {
  const t = useTranslations('your_tutor_page');
  return (
    <Card className='p-0'>
      <Card.Header>
        {t('tutorPriceCard.tutoringCenterEmploymentCard.title')}
      </Card.Header>
      <Card.Body>
        <h5>
          {t('tutorPriceCard.tutoringCenterEmploymentCard.body')}
        </h5>
      </Card.Body>
    </Card>
  );
}

const TutorPriceCard = () => {
  const c = useTranslations('common');
  const t = useTranslations('your_tutor_page');
  return (
    <div>
      <h1>{t('tutorPriceCard.title')}</h1>
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
              <p>{t('tutorPriceCard.extraCostDepends')}</p>
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