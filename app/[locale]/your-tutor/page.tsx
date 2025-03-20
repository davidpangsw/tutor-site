import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TutorAboutMe from './components/TutorAboutMe';
import TutorPriceCard from './components/TutorPriceCard/TutorPriceCard';
import TutorServiceCard from './components/TutorServiceCard';
import WhyTutor from './components/WhyTutor';
import ContactCard from '@/app/utils/contacts/ContactCard';
import TutorMyStory from './components/TutorMyStory';
import TutorWhyMe from './components/TutorWhyMe';


const YourTutorPage = () => {
  return (
    <Container className='px-0'>
      <Row className='py-2'><Col className='px-md-4'> <TutorWhyMe /> </Col> </Row>
      <Row className='py-2'><Col className='px-md-4'> <ContactCard /> </Col> </Row>
      <Row className='py-2'><Col className='px-md-4'> <TutorAboutMe /> </Col> </Row>
      <Row className='py-2'><Col className='px-md-4'> <TutorServiceCard /> </Col> </Row>
      <Row className='py-2'><Col className='px-md-4'> <WhyTutor /> </Col> </Row>
      <Row className='py-2'><Col className='px-md-4'> <TutorMyStory /> </Col> </Row>
      <Row className='py-2'><Col className='px-md-4'> <TutorPriceCard /> </Col> </Row>
    </Container>
  )
}

export default YourTutorPage