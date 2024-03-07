import styled from 'styled-components';
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img alt='Logo' src='../../public/logo-light.png' />
    </StyledLogo>
  );
}

export default Logo;
