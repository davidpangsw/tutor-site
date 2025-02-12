"use client";

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from '@/app/utils/locale/i18n/routing';

interface LinkCardProps {
  to: string,
  description: string,
  title: string,
  className: string,
}

const LinkCard = (props: LinkCardProps) => {
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