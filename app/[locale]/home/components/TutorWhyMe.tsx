'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, Container } from 'react-bootstrap';

interface Point {
  subtitle: string;
  descriptions: string[];
}

const TutorWhyMe = () => {
  const t = useTranslations('your_tutor_page.tutor_why_me');

  // Fetch title, points, and call-to-action from translations
  const title = t('title');
  const points = t.raw('points') as Point[];

  return (
    <div className="tutor-why-me py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        {/* Title */}
        <h1 className="text-center mb-5 fw-bold text-primary">{title}</h1>

        {/* Points Grid */}
        <Row className="g-4">
          {points.map((point, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <Card className="h-100 shadow border-0" style={{ transition: 'transform 0.2s ease', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <CardBody className="p-4">
                  <CardTitle className="text-primary fw-bold mb-3 fs-5">{point.subtitle}</CardTitle>
                  <ul className="list-unstyled mb-0">
                    {point.descriptions.map((desc, descIndex) => (
                      <li key={descIndex} className="mb-2 text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TutorWhyMe;