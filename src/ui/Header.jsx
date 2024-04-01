import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';
import ToggleMenu from './ToggleMenu.jsx';
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar></UserAvatar>
      <HeaderMenu></HeaderMenu>
      <ToggleMenu></ToggleMenu>
    </StyledHeader>
  );
}

export default Header;
