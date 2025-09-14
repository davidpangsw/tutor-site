import { useTranslations } from 'next-intl';
import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, Container } from 'react-bootstrap';

interface Service {
  title: string;
  description: string;
}

const TutorWhatIProvide = () => {
  const t = useTranslations('home_page.tutor_what_i_provide');

  const title = t('title');
  const services = t.raw('services') as Service[];

  return (
    <div className="tutor-what-i-provide">
      <Container>
        <h2 className="text-center my-4">{title}</h2>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <CardBody className="d-flex flex-column">
                  <CardTitle className="text-primary text-center mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-center flex-grow-1 d-flex align-items-center justify-content-center">
                    {service.description}
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TutorWhatIProvide;