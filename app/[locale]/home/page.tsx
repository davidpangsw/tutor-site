import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';
import Image from 'next/image';
// import LinkCard from '@/app/utils/components/LinkCard';
// import photo from '@/public/assets/photo.jpg';
import { useTranslations } from 'next-intl';
import TutorWhyMe from './components/TutorWhyMe';
import ContactCard from '@/app/utils/contacts/ContactCard';
import TutorAboutMe from './components/TutorAboutMe';
import TutorServiceCard from './components/TutorServiceCard';
import WhyTutor from './components/WhyTutor';
import TutorPriceCard from './components/TutorPriceCard';
import TutorCallToAction from './components/TutorCallToAction';
import TutorWhatIProvide from './components/TutorWhatIProvide';

const photo = '/assets/photo.jpg';
const HomePageIntro = () => {
  const t = useTranslations('home_page');
  return (
    <p className='bona-nova-sc-regular'>{t('intro')}</p>
  );
}
/*
const HomePageCards = () => {
  const t = useTranslations('home_page');
  const cards = [
    {
      to: '/your-tutor',
      title: t('tutorCard.title'),
      description: t('tutorCard.description'),
    },
    // {
    //   to: '/your-developer',
    //   title: t('developerCard.title'),
    //   description: t('developerCard.description'),
    // }
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
*/

const HomePage = () => {
  const t = useTranslations('common');

  return (
    <div className='d-flex flex-column fs-1 m-4' style={{ minHeight: '90%' }}>
      <div>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </div>
      {/* <HomePageCards /> */}
      <div className='d-flex flex-column px-0 fs-6 m-0'>
        <Row>
          <Col className='d-flex justify-content-center' md={{ span: "auto", order: 1 }}>
            <Image
              src={photo}
              width="320"
              height="320"
              style={{ borderRadius: "50%", maxWidth: "320px" }}
              alt={'photo'}
            />
          </Col>
          <Col md={{ order: 12 }}>
            <h1 className='bona-nova-sc-bold'>David</h1>
            <h6 className='bona-nova-sc-regular'>{t('STEM Tutor')}</h6>
            {/* <h6 className='bona-nova-sc-regular'>{t('Full-stack Developer')}</h6> */}
            <HomePageIntro />
          </Col>
        </Row>
        <Row className='py-2'><Col className='px-md-4'> <TutorCallToAction /> </Col> </Row>
        <Row className='py-2'><Col className='px-md-4'> <ContactCard /> </Col> </Row>
        
        <Row className='py-2'><Col className='px-md-4'> <TutorWhatIProvide /> </Col> </Row>
        {/*
        <Row className='py-2'><Col className='px-md-4'> <WhyTutor /> </Col> </Row>
        */}
        <Row className='py-2'><Col className='px-md-4'> <TutorWhyMe /> </Col> </Row>

        <Row className='py-2'><Col className='px-md-4'> <TutorServiceCard /> </Col> </Row>
        <Row className='py-2'><Col className='px-md-4'> <TutorPriceCard /> </Col> </Row>
        <Row className='py-2'><Col className='px-md-4'> <TutorAboutMe /> </Col> </Row>
      </div>
    </div>
  )
}

export default HomePage;