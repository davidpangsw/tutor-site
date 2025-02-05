import React from 'react';
import { CardBody, CardSubtitle, CardTitle } from 'react-bootstrap';
import FlipCard from './FlipCard/FlipCard';

interface SummaryCardPoint {
  bold: string,
  text: string,
}
interface SummaryCardProps {
  title: string,
  description: string,
  points: SummaryCardPoint[],
  style: React.CSSProperties,
  className: string,
}

const SummaryCard = (props: SummaryCardProps) => {
  const { title, description, points, style, className } = props;

  const front = (
    <CardBody className='text-bg-primary'>
      <CardTitle style={{ fontSize: "3rem" }}>{title}</CardTitle>
      <CardSubtitle style={{ fontSize: "1rem" }}>{description}</CardSubtitle>
    </CardBody>
  );
  const back = (
    <CardBody className='text-bg-tertiary'>
      <CardTitle style={{ fontSize: "2rem" }}>{title}</CardTitle>
      {/* <CardSubtitle style={{ fontSize: "1.2rem" }}>{description}</CardSubtitle> */}
      <ul>
        {points.map((point: SummaryCardPoint, index: React.Key) => (
          <li key={index} style={{ fontSize: "1.2rem" }}><strong>{point.bold}</strong>: {point.text}</li>
        ))}
      </ul>
    </CardBody>
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