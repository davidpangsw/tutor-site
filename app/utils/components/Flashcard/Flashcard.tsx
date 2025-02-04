"use client";
import { useState, useEffect, useRef } from "react";
import { Card, Button, Col, Container, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { SuperMemoGrade } from "supermemo";
import styles from './Flashcard.module.css';
import { FlashcardFace, FlashcardData, FLASHCARD_GRADES } from "./FlashcardModel";
import { Check, X } from 'react-bootstrap-icons';

const faceToElement = (face: FlashcardFace) => {
  if (typeof face === 'string') {
    return <p>{face}</p>
  }

  return face;
}

const PanelButton = (props: { index: number, setGrade: (g: SuperMemoGrade) => void }) => {
  const { index, setGrade } = props;
  const { grade, label, explain } = FLASHCARD_GRADES[index];
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{explain}</Tooltip>}
    >
      <Button
        className="m-auto rounded p-0 h-100 w-100"
        key={grade}
        onClick={() => setGrade(grade as SuperMemoGrade)}
      >
        {label}<br />({grade})
      </Button>
    </OverlayTrigger>
  );
}

interface FlashcardProps {
  card: FlashcardData,
  setGrade: (g: SuperMemoGrade) => void,
  settings: {
    flipMs: number,
    flipBack: boolean,
  }
}
const Flashcard = (props: FlashcardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { card, setGrade, settings: { flipMs, flipBack } } = props;
  const { front, back } = card;
  const [isFlipped, setIsFlipped] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => { setIsFlipped(false); setClicked(false); }, [card]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped || !flipBack);
    setClicked(true);
  };

  useEffect(() => {
    // Focus the element when the component is mounted
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);


  const panel = (
    <div>
      <Container>
        <Row>
          <Col
            className="p-2 m-0"
            xs={6}
            key={0}
            style={{ border: '1px solid black' }}
          >
            <X style={{ width: '100%' }} />
          </Col>
          <Col
            className="p-2 m-0"
            xs={6}
            key={1}
            style={{ border: '1px solid black' }}
          >
            <Check style={{ width: '100%' }} />
          </Col>
        </Row>
        <Row className="h-100">
          <Col
            xs={6}
            style={{ border: '1px solid black' }}
          >
            <Row className='h-100'>
              {[0, 1, 2].map(ind =>
                <Col
                  className="p-1 m-0"
                  xs={4}
                  key={ind}
                >
                  <PanelButton index={ind} setGrade={setGrade} />
                </Col>
              )}
            </Row>
          </Col>
          <Col
            xs={6}
            style={{ border: '1px solid black' }}
          >
            <Row className='h-100'>
              {[3, 4, 5].map(ind =>
                <Col
                  className="p-1 m-0"
                  xs={4}
                  key={ind}
                >
                  <PanelButton index={ind} setGrade={setGrade} />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <div
      className={styles['flashcard-container']}
      ref={containerRef}
      tabIndex={0}
      onKeyDown={(event) => {
        // console.log(isFlipped, event.key)
        if (['Enter', ' '].includes(event.key)) {
          handleCardClick();
        } else if (clicked && ['0', '1', '2', '3', '4', '5'].includes(event.key)) {
          setGrade(parseInt(event.key) as SuperMemoGrade); // for simplicity, just let the button be the grade
        }
      }}>
      <div className={styles['flashcard']} onClick={handleCardClick}>
        <div
          className={`${styles['flashcard-inner']} ${isFlipped ? styles.isFlipped : ''}`}
          style={{
            transition: `${flipMs}s`, // flip speed
          }}
        >
          <Card className={`${styles['flashcard-front']}`}>
            <Card.Header>Front</Card.Header>
            <Card.Body>{faceToElement(front)}</Card.Body>
          </Card>
          <Card className={`${styles['flashcard-back']}`}>
            <Card.Header>Back</Card.Header>
            <Card.Body>{faceToElement(back)}</Card.Body>
          </Card>
        </div>
      </div>
      {clicked ? (panel) : <p>[Left Click] / [Space] / [Enter] to flip</p>}
    </div>
  );
};

export type { FlashcardData, FlashcardFace };
export default Flashcard;
