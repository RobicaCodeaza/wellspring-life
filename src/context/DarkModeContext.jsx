import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState.js';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia('(prefers-color-scheme:dark)').matches,
    'isDarkMode'
  );

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-mode');
      }
      if (!isDarkMode) {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error('DarkModeContext was used outside of DarkModeProvider');
  return context;
}
export { DarkModeProvider, useDarkMode };
