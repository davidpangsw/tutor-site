import { DARK_THEME, useToggleTheme } from '@/app/utils/theme';
import React from 'react'
import { Form, NavItem } from 'react-bootstrap'

const MyNavThemeToggle = () => {
  const [theme, toggleTheme] = useToggleTheme();
  return (
    <Form>
      <Form.Check
        id='theme-switch-nav'
        className="theme-switch"
        type="switch"
        onChange={toggleTheme}
        checked={theme === DARK_THEME}
      />
    </Form>
  )
}

export default MyNavThemeToggle