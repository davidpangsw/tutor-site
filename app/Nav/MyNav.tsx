'use client';

import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavbarCollapse, NavbarToggle, NavItem } from "react-bootstrap";
// import { Link } from "react-router-dom";
import './MyNav.css';
import MyNavDropdown, { MyNavDropdownProps } from './components/MyNavDropdown';
import MyNavLink, { MyNavLinkProps } from './components/MyNavLink';
import { useTranslations } from 'next-intl';
import { localeToggleItems, navItems } from './config';
import MyNavThemeToggle from './components/MyNavThemeToggle';
import MyNavLocaleToggle from './components/MyNavLocaleToggle';

interface MyNavItem {
  type: 'link' | 'dropdown',
  props: MyNavLinkProps | MyNavDropdownProps,
}

interface MyNavProps {
  // theme: string,
  // toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const MyNav = (props: MyNavProps) => {
  // const { theme, toggleTheme, items } = props;
  const {
  } = props;
  // const c = useTranslations('common');
  const t = useTranslations('nav');
  return (
    <Navbar expand="lg" className='fs-4'>
      <Container>
        <NavbarToggle aria-controls="navbar-nav" />
        {/* <Navbar.Brand className='nav-item nav-underline' as={Link} to="/"><FaHome /></Navbar.Brand> */}
        <NavbarCollapse id="navbar-nav">
          <Nav className="me-auto">
            {navItems.map(item => {
              if (item.type === 'link') {
                const props = item.props as MyNavLinkProps;
                return <MyNavLink
                  key={props.label}
                  {...props}
                  label={t(props.label)}
                 />
              } else if (item.type === 'dropdown') {
                const props = item.props as MyNavDropdownProps
                const items = props.items.map((item) => {
                  return {
                    ...item,
                    label: t(item.label),
                  }
                })
                return <MyNavDropdown
                  key={props.title}
                  {...props}
                  title={t(props.title)}
                  items={items}
                  />
              } else {
                return <div />
              }
            })}
          </Nav>
        </NavbarCollapse>
        <NavItem>
          <MyNavLocaleToggle locales={localeToggleItems} />
        </NavItem>
        <NavItem>
          <MyNavThemeToggle />
        </NavItem>
      </Container>
    </Navbar>
  );
}

export type { MyNavProps, MyNavItem };
export default MyNav;