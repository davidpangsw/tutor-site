import { useTranslations } from 'next-intl';
import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button, Container } from 'react-bootstrap';
// import './TutorWhyMe.css'; // Optional: For custom styling

interface Point {
  subtitle: string;
  descriptions: string[];
}

const TutorWhyMe = () => {
  const t = useTranslations('your_tutor_page.tutor_why_me');

  // Fetch title, points, and call-to-action from translations
  const title = t('title');
  const points = t.raw('points') as Point[];
  const callToAction = t('call_to_action');

  console.log(points)

  return (
    <div className="tutor-why-me">
      <Container>
        {/* Title */}
        <h1 className="text-center my-4">{title}</h1>

        {/* Points Grid */}
        <Row className="g-4"> {/* g-4 adds gutter spacing */}
          {points.map((point, index) => {
            console.log(point);
            console.log(point.subtitle);
            return (
              <Col key={index} xs={12} md={6} lg={3}> {/* Responsive columns */}
                <Card className="h-100 shadow-sm"> {/* h-100 ensures equal height */}
                  <CardBody>
                    <CardTitle className="text-primary">{point.subtitle}</CardTitle>
                    <ul className="list-unstyled">
                      {point.descriptions.map((desc, descIndex) => (
                        <li key={descIndex} className="mb-2">{desc}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>

        {/* Call-to-Action */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button variant="primary" size="lg">
              {callToAction}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TutorWhyMe;