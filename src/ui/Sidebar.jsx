import styled from 'styled-components';

import Logo from './Logo';
import MainNav from './MainNav';
import Uploader from '../data/Uploader';
import { useMobileNav } from '../context/ToggleMobileNav.jsx';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 550px) {
    padding: 1.5rem;
    position: absolute;
    height: 100vh;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
  }
`;

function Sidebar() {
  const { openMenu } = useMobileNav();

  return (
    <StyledSidebar
      style={{
        // display: openMenu ? 'flex' : 'none',

        transform: openMenu ? 'translateX(0)' : '',
      }}
    >
      <Logo></Logo>
      <MainNav></MainNav>
      <Uploader></Uploader>
    </StyledSidebar>
  );
}

export default Sidebar;
