import styled from 'styled-components';
import { useDarkMode } from '../context/DarkModeContext.jsx';
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? 'logo-dark.png' : 'logo-light.png';

  return (
    <StyledLogo>
      <Img alt='Logo' src={src} />
    </StyledLogo>
  );
}

export default Logo;
