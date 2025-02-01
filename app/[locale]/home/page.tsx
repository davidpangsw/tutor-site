import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
import Image from 'next/image';
import LinkCard from '@/app/utils/LinkCard';
// import photo from '@/public/assets/photo.jpg';
import { useTranslations } from 'next-intl';

const photo = '/assets/photo.jpg';
const HomePageIntro = () => {
  const t = useTranslations('home_page');
  return (
    <p className='bona-nova-sc-regular'>{t('intro')}</p>
  );
}
const HomePageCards = () => {
  const t = useTranslations('home_page');
  const cards = [
    {
      to: '/your-tutor',
      title: t('tutorCard.title'),
      description: t('tutorCard.description'),
    },
    {
      to: '/your-developer',
      title: t('developerCard.title'),
      description: t('developerCard.description'),
    }
  ];

  return (
    <Container fluid className='mx-auto my-4'>
      <Row>
        {cards.map((card, index) => (
          <Col key={index}
            className="my-2">
            <LinkCard
              className="m-2 p-4 h-100"
              to={card.to}
              title={card.title}
              description={card.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const HomePage = (props: any) => {
  const t = useTranslations('common');

  return (
    <div className='d-flex flex-column fs-1 m-4' style={{ minHeight: '90%' }}>
      <div>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </div>
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center' md={{ span: "auto", order: 1 }}>
            <Image
              src={photo}
              width="320"
              height="320"
              style={{ borderRadius: "50%", maxWidth: "320px" }}
              layout="responsive"
              alt={'photo'}
            />
          </Col>
          <Col md={{ order: 12 }}>
            <h1 className='bona-nova-sc-bold'>David</h1>
            <h6 className='bona-nova-sc-regular'>{t('STEM Tutor')}</h6>
            <h6 className='bona-nova-sc-regular'>{t('Full-stack Developer')}</h6>
            <HomePageIntro />
          </Col>
        </Row>
      </Container>
      <HomePageCards />
    </div>
  )
}

export default HomePage;