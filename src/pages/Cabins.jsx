import Heading from '../ui/Heading';
// import Row from '../ui/Row';
import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import styled from 'styled-components';
import Row from '../ui/Row.jsx';
const RowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.4rem;
  }
`;
function Cabins() {
  return (
    <>
      <RowHeader type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <CabinTableOperations></CabinTableOperations>
      </RowHeader>
      <Row>
        <CabinTable></CabinTable>
        <AddCabin></AddCabin>
      </Row>
    </>
  );
}

export default Cabins;
