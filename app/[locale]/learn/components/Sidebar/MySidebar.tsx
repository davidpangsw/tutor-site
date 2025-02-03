"use client";
import React, { useState } from 'react';
import { Nav, NavLink, NavbarBrand } from 'react-bootstrap';
import styles from './MySidebar.module.css';
import { Link } from '@/app/utils/locale/i18n/routing';
import SidebarMenu from 'react-bootstrap-sidebar-menu'; // this doesn't work with nextjs and react

interface MySidebarLinkProps {
  type: 'link',
  to: string,
  title: string,
}

interface MySidebarMenuProps {
  type: 'menu',
  title: string,
  sections: [
    {
      to: string,
      title: string,
    }
  ]
}

type MySidebarItemProps = MySidebarLinkProps | MySidebarMenuProps;

const MySidebarMenu = (props: MySidebarMenuProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { title, sections } = props;
  return (
    <SidebarMenu.Nav className={styles.menu}>
      <SidebarMenu.Sub>
        <SidebarMenu.Sub.Toggle as={Nav.Link} onClick={() => setIsOpen(!isOpen)}>{title}</SidebarMenu.Sub.Toggle>
        <SidebarMenu.Sub.Collapse in={isOpen}>
          <ul>
            {sections.map((section) => {
              const { to, title } = section;
              return <li key={title}><NavLink as={Link} href={to}>{title}</NavLink></li>
            })}
            {/* Add more SidebarMenu.Item elements here for additional links */}
          </ul>
        </SidebarMenu.Sub.Collapse>
      </SidebarMenu.Sub>
    </SidebarMenu.Nav>
  );
}

const MySidebarItem = (props: MySidebarItemProps) => {
  if (props.type === 'menu') {
    return <MySidebarMenu {...props} />;
  } else if (props.type === 'link') {
    const { to, title } = props;
    return (
      <SidebarMenu.Nav>
        <NavLink as={Link} href={to}>{title}</NavLink>
      </SidebarMenu.Nav>
    );
  } else {
    return <div />;
  }
}

interface MySidebarProps {
  brand: {
    to: string,
    title: string,
  },
  items: MySidebarItemProps[],
}

const MySidebar = (props: MySidebarProps) => {
  const {
    brand,
    items,
  } = props;
  return (
    <SidebarMenu className="d-flex flex-column align-items-stretch" style={{ minWidth: '10rem' }}>
      <SidebarMenu.Header>
        <NavbarBrand className='m-1' as={Link} href={brand.to}>
          {brand.title}
        </NavbarBrand>
      </SidebarMenu.Header>
      <SidebarMenu.Body>
        {items.map(item => {
          return <MySidebarItem key={item.title} {...item} />;
        })}
      </SidebarMenu.Body>
    </SidebarMenu >
  );
}

export type { MySidebarProps }
export default MySidebar