import { useEffect, useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedPreference = localStorage.getItem('darkMode');

    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    }

    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prevMode) => !prevMode)}
      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 rounded"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <MdOutlineLightMode className="" /> : <MdOutlineDarkMode />}
    </button>
  );
}

export default ThemeToggle;
