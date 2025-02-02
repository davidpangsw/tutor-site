"use client";
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from './FlipCard.module.css';

interface FlipCardProps {
  style: React.CSSProperties,
  className: string,
  front: React.ReactNode,
  back: React.ReactNode,
}

const FlipCard = (props: FlipCardProps) => {
  const {style, className, front, back} = props;
  const [ active, setActive ] = useState(false);

  return (
    <div className={`${styles['flip-card']} ${className}`} style={style}>
      <div className={`${styles['flip-card-inner']} ${active? 'active' : ''}`} onClick={() => setActive(!active)}>
        <Card className={styles['flip-card-front']}>
          {front}
        </Card>
        <Card className={styles['flip-card-back']}>
          {back}
        </Card>
      </div>
    </div>
  );
}

export default FlipCard