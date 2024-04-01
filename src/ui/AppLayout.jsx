import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 1200px) {
    grid-template-columns: 20rem 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 12.5rem 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  /* background-color: green; */
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow-y: scroll;
  @media (max-width: 1200px) {
    padding: 3rem 3rem 6.4rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem 6.4rem;
  }
  @media (max-width: 550px) {
    padding: 1rem 1rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header></Header>
      <Sidebar></Sidebar>
      <Main>
        <Container>
          <Outlet></Outlet>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
