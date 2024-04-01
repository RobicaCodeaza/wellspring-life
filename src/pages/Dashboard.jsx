import DashboardFilter from '../features/dashboard/DashboardFilter.jsx';
import DashboardLayout from '../features/dashboard/DashboardLayout.jsx';

import Heading from '../ui/Heading';
// import Row from '../ui/Row';
import styled from 'styled-components';
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

function Dashboard() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Dashboard</Heading>
        <DashboardFilter></DashboardFilter>
      </Row>
      <DashboardLayout></DashboardLayout>
    </>
  );
}

export default Dashboard;
