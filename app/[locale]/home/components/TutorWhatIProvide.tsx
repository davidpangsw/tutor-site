import { useTranslations } from 'next-intl';
import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, Container } from 'react-bootstrap';

interface Service {
  title: string;
  description: string;
  features: string[];
}

const TutorWhatIProvide = () => {
  const t = useTranslations('home_page.tutor_what_i_provide');

  const title = t('title');
  const services = t.raw('services') as Service[];

  return (
    <div className="tutor-what-i-provide bg-light py-5">
      <Container>
        <h2 className="text-center mb-5 text-dark fw-bold">{title}</h2>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} lg={4} xl={3}>
              <Card className="h-100 border-0 shadow-lg position-relative overflow-hidden service-card">
                <div className="position-absolute top-0 start-0 w-100 h-2 bg-gradient"
                     style={{
                       background: `linear-gradient(90deg,
                         ${index % 5 === 0 ? '#007bff, #0056b3' :
                           index % 5 === 1 ? '#28a745, #1e7e34' :
                           index % 5 === 2 ? '#ffc107, #e0a800' :
                           index % 5 === 3 ? '#dc3545, #c82333' :
                           '#6f42c1, #5a32a3'})`
                     }}>
                </div>
                <CardBody className="d-flex flex-column p-4">
                  <CardTitle className="text-center mb-3 h5 fw-bold text-dark">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted text-center mb-4 small">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="d-flex align-items-center mb-2">
                        <div className="rounded-circle bg-success me-3 d-flex align-items-center justify-content-center"
                             style={{width: '8px', height: '8px', minWidth: '8px'}}>
                        </div>
                        <span className="small text-dark">{feature}</span>
                      </div>
                    ))}
                  </div>
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