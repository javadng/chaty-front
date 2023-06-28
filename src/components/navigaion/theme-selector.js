import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSelector = props => {
  const { setTheme } = useTheme();

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  if (!isBrowser) return null;

  const themeChangeHandler = e => {
    if (e.target.checked) {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="icon">
      <NightsStayIcon className="dark:text-white" />
      <label htmlFor="theme" className="label">
        <input
          onChange={themeChangeHandler}
          checked={localStorage.getItem('theme') === 'light'}
          type="checkbox"
          name="theme-selec"
          className="input"
          id="theme"
        />
        <span className="slider"></span>
      </label>
      <LightModeIcon className="dark:text-white" />
    </div>
  );
};

export default ThemeSelector;
