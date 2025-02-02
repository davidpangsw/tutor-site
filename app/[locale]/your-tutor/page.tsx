import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TutorAboutMe from './components/TutorAboutMe';
import TutorPriceCard from './components/TutorPriceCard';
import TutorServiceCard from './components/TutorServiceCard';
import WhyTutor from './components/WhyTutor';
import ContactCard from '@/app/utils/contacts/ContactCard';


const YourTutorPage = () => {
  return (
    <Container className='px-0'>
      <Row className='py-2'><Col className='px-md-4'> <ContactCard /> </Col> </Row>
      <Row className='py-2'><Col className='px-md-4'> <TutorServiceCard /> </Col> </Row>
      {/* <Row className='py-2'><Col className='px-md-4'> <TutorPriceCard /> </Col> </Row> */}
      {/* <Row className='py-2'><Col className='px-md-4'> <TutorAboutMe /> </Col> </Row> */}
      {/* <Row className='py-2'><Col className='px-md-4'> <WhyTutor /> </Col> </Row> */}
    </Container>
  )
}

export default YourTutorPage