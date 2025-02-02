import React from 'react'
import { NavLink } from 'react-bootstrap';
import {Link} from '@/app/utils/locale/i18n/routing';

interface MyNavLinkProps {
  to: string,
  label: string,
}

const MyNavLink = (props: MyNavLinkProps) => {
  const { to, label } = props;
  return <NavLink className="nav-underline" as={Link} href={to}>{label}</NavLink>
}

export type { MyNavLinkProps };
export default MyNavLink;