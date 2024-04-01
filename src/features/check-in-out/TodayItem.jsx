import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Tag from '../../ui/Tag.jsx';
import { Flag } from '../../ui/Flag.jsx';
import CheckoutButton from './CheckoutButton.jsx';
import Button from '../../ui/Button.jsx';

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 768px) {
    /* display: grid; */
    /* grid-template-columns: 9rem 2rem 1fr 7rem 9rem; */
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function TodayItem({ activity: { id, status, guests, numNights } }) {
  // const navigate =useNavigate()
  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type='green'>Arriving</Tag>}
      {status === 'checked-in' && <Tag type='blue'>Departing</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`}></Flag>
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>
      {status === 'unconfirmed' && (
        <Button
          size='small'
          variation='primary'
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === 'checked-in' && (
        <CheckoutButton bookingId={id}></CheckoutButton>
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;
