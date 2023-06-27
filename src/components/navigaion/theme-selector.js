import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import classes from './them-selector.module.css';
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
    <div className={classes.icon}>
      <NightsStayIcon className="dark:text-white" />
      <label htmlFor="theme" className={classes.label}>
        <input
          onChange={themeChangeHandler}
          checked={localStorage.getItem('theme') === 'light'}
          type="checkbox"
          name="theme-selec"
          className={classes.input}
          id="theme"
        />
        <span className={classes.slider}></span>
      </label>
      <LightModeIcon className="dark:text-white" />
    </div>
  );
};

export default ThemeSelector;
