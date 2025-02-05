import { useTranslations } from 'next-intl';
import { Col, Container, Row, } from 'react-bootstrap';
import React from 'react'

interface Introduction {
  title: string,
  content: string,
};

const TutorMyStory = () => {
  const t = useTranslations('your_tutor_page.tutor_my_story');
  const intro = t.raw('introduction') as Introduction[];
  return (
    <div>
      <h1>{t('title')}</h1>
      <Container>
        <Row>
          <Col className="p-0" md={{ span: 12, order: 1 }} >
            {intro.map(({ title, content }) => {
              return (
                <div key={title}>
                  <h3>{title}</h3>
                  <p style={{ whiteSpace: "pre-line" }}>{content}</p>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TutorMyStory