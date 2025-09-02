
import { useTranslations } from 'next-intl';
import React from 'react'
import { Button, Col, Row, Container } from 'react-bootstrap'

const TutorCallToAction = () => {
  const t = useTranslations('your_tutor_page.tutor_call_to_action');
  const callToAction = t('call_to_action');
  return (
    <div>
      <Container>

        {/* Call-to-Action */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button 
              variant="primary" 
              size="lg"
              href="https://forms.gle/aqiwB1zVSEV9AoX77"
              target="_blank"
              rel="noopener noreferrer"
              as="a"
            >
              {callToAction}
            </Button>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default TutorCallToAction