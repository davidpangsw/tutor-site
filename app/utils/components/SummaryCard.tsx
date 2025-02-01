import React from 'react';
import { Card } from 'react-bootstrap';
import FlipCard from './FlipCard';

const SummaryCard = (props: any) => {
  const {title, description, points, style, className} = props;

  const front = (
      <Card.Body className='text-bg-primary'>
        <Card.Title style={{ fontSize: "3rem" }}>{title}</Card.Title>
        <Card.Subtitle style={{ fontSize: "1rem" }}>{description}</Card.Subtitle>
      </Card.Body>
  );
  const back = (
      <Card.Body className='text-bg-tertiary'>
        <Card.Title style={{ fontSize: "2rem" }}>{title}</Card.Title>
        {/* <Card.Subtitle style={{ fontSize: "1.2rem" }}>{description}</Card.Subtitle> */}
        <ul>
          {points.map((point: { bold: string, text: string }, index: React.Key) => (
            <li key={index} style={{ fontSize: "1.2rem"}}><strong>{point.bold}</strong>: {point.text}</li>
          ))}
        </ul>
      </Card.Body>
  );

  return (
    <FlipCard
      className={className}
      style={style}
      front={front}
      back={back}
    />
  );
}

export default SummaryCard;