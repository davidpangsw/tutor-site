import { useEffect, useState } from 'react';
const LIGHT_THEME = "light";
const DARK_THEME = "dark";
function useToggleTheme(defaultTheme: string = LIGHT_THEME) {
  const [theme, setTheme] = useState<string>(defaultTheme);

  useEffect(() => {
    // console.log("init theme:" + localStorage.getItem('theme'));
    setTheme(localStorage.getItem('theme') ?? defaultTheme);
  }, []);

  useEffect(() => {
    // console.log("set theme:" + theme);
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-bs-theme', theme); // abuse of design? doesn't matter
  }, [theme]);

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.currentTarget!.checked ? DARK_THEME : LIGHT_THEME);
  }
  return [theme, toggleTheme] as const;
}

export {
  LIGHT_THEME, DARK_THEME,
  useToggleTheme,
}