'use client';

import React from 'react';
import { Container, Nav, Navbar, NavbarCollapse, NavbarToggle, NavItem } from "react-bootstrap";
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

// interface MyNavProps {
// }


const MyNav = () => {
  // const c = useTranslations('common');
  const t = useTranslations('nav');
  return (
    <Navbar expand="lg" className='fs-4'>
      <Container>
        <NavbarToggle aria-controls="navbar-nav" />
        {/* <Navbar.Brand className='nav-item nav-underline' as={Link} to="/"><FaHome /></Navbar.Brand> */}
        <NavbarCollapse id="navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item, index) => {
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
                return <div key={index} />
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

export type { MyNavItem };
export default MyNav;