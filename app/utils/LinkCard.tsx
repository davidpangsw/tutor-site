"use client";

import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from './locale/i18n/routing';

const LinkCard = (props: any) => {
  const [active, setActive] = useState(false);
  const { to, description, title, className } = props;
  return (
    <Card
      as={Link}
      href={to}
      className={`${active ? 'bg-secondary-subtle' : 'bg-primary-subtle'} rounded-5 ${className}`}
      style={{
        textDecoration: 'none',
        transition: 'all 0.2s ease-in-out'
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}

      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
    >
      <Card.Title className='roboto-bold fs-1 badge rounded-5 text-wrap'>{title}</Card.Title>
      <Card.Body>
        {description}
      </Card.Body>
    </Card>
  );
}

export default LinkCard;