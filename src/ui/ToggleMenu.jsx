import { HiEllipsisVertical } from 'react-icons/hi2';
import styled from 'styled-components';
import { useMobileNav } from '../context/ToggleMobileNav.jsx';

const Button = styled.button`
  margin-left: auto;
  background-color: var(--color-brand-600);
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
  height: 4rem;
  width: 4rem;
  svg {
    height: 3rem;
    width: 3rem;
  }
  display: none;
  @media (max-width: 550px) {
    display: block;
  }
`;

function ToggleMenu() {
  const { toggleMobileNav } = useMobileNav();

  return (
    <Button onClick={toggleMobileNav}>
      <HiEllipsisVertical></HiEllipsisVertical>
    </Button>
  );
}

export default ToggleMenu;
