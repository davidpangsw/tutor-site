'use client';

import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavbarCollapse, NavbarToggle, NavItem } from "react-bootstrap";
// import { Link } from "react-router-dom";
import './MyNav.css';
// import { DARK_THEME } from '../../utils/theme';
// import i18n from '../../app/utils/i18n';
import MyNavDropdown, { MyNavDropdownProps } from './MyNavDropdown';
import MyNavLink, { MyNavLinkProps } from './MyNavLink';

interface MyNavItem {
  type: 'link' | 'dropdown',
  props: MyNavLinkProps | MyNavDropdownProps,
}

interface MyNavProps {
  // theme: string,
  // toggleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items: MyNavItem[],
}


const MyNav = (props: MyNavProps) => {
  // const { theme, toggleTheme, items } = props;
  const {
    items
  } = props;

  // i18n Translation toggle
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // }
  // const translationToggle = (
  //   <NavItem>
  //     <Button className='m-1 rounded' size="sm" title="English" onClick={() => changeLanguage('en')}>En</Button>
  //     <Button className='m-1 rounded' size="sm" title="简体中文" onClick={() => changeLanguage('zh-Hans')}>简</Button>
  //     <Button className='m-1 rounded' size="sm" title="繁體中文" onClick={() => changeLanguage('zh-Hant')}>繁</Button>
  //   </NavItem>
  // );

  return (
    <Navbar expand="lg" className='fs-4'>
      <Container>
        <NavbarToggle aria-controls="navbar-nav" />
        {/* <Navbar.Brand className='nav-item nav-underline' as={Link} to="/"><FaHome /></Navbar.Brand> */}
        <NavbarCollapse id="navbar-nav">
          <Nav className="me-auto">
            {items.map(item => {
              if (item.type === 'link') {
                const props = item.props as MyNavLinkProps;
                return <MyNavLink key={props.label} {...props} />
              } else if (item.type === 'dropdown') {
                const props = item.props as MyNavDropdownProps;
                return <MyNavDropdown key={props.title} {...props} />
              } else {
                return <div />
              }
            })}
          </Nav>
        </NavbarCollapse>
        {/* <NavItem>
            <Form>
              <Form.Check id='theme-switch-nav' className="theme-switch" type="switch" onChange={toggleTheme} checked={theme === DARK_THEME} />
            </Form>
          </NavItem> */}
      </Container>
    </Navbar>
  );
}

export type { MyNavProps };
export default MyNav;