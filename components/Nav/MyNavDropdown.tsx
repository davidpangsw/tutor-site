import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import styles from './MyNavDropdown.module.css';
import { Link } from '@/i18n/routing';

interface MyNavDropdownProps {
  title: string,
  items: {
    label: string,
    to: string,
  }[],
}

const MyNavDropdown = (props: MyNavDropdownProps) => {
  let { title, items } = props;

  return (
    <NavDropdown
      className={`${styles['nav-dropdown']} nav-underline`}
      title={title}
      renderMenuOnMount={true}
    >
      {items.map(({ to, label }: { to: string, label: string }) =>
      (
        <NavDropdown.Item
          key={to}
          as={Link}
          href={to}
        >{label}</NavDropdown.Item>
      )
      )}
    </NavDropdown>
  );
}

export type { MyNavDropdownProps };
export default MyNavDropdown;