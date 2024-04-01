import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
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

function Bookings() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All bookings</Heading>
        <BookingTableOperations></BookingTableOperations>
      </Row>
      <BookingTable></BookingTable>
    </>
  );
}

export default Bookings;
