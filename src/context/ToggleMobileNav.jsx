import { createContext, useContext, useState } from 'react';

const ToggleMobileNavContext = createContext();

function MobileNavProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMobileNav() {
    console.log(openMenu);
    setOpenMenu((openMenu) => !openMenu);
  }

  return (
    <ToggleMobileNavContext.Provider value={{ openMenu, toggleMobileNav }}>
      {children}
    </ToggleMobileNavContext.Provider>
  );
}

function useMobileNav() {
  const context = useContext(ToggleMobileNavContext);
  if (context === undefined)
    throw new Error(
      'ToggleMobileNavContext was used outside of MobileNavProvider'
    );
  return context;
}
export { MobileNavProvider, useMobileNav };
