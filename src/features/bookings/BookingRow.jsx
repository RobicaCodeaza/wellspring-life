import styled from 'styled-components';
import {
  HiArrowDownOnSquare,
  HiEye,
  HiArrowUpOnSquare,
  HiTrash,
} from 'react-icons/hi2';

import { format, isToday } from 'date-fns';
import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';

import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../check-in-out/useCheckout';
import { useDeleteBooking } from '../bookings/useDeleteBooking';

import Tag from '../../ui/Tag';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Spinner from '../../ui/Spinner';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };
  const { checkout, isLoadingCheckOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  function handleCheckOut() {
    checkout(bookingId);
  }
  if (isLoadingCheckOut || isDeleting) return <Spinner></Spinner>;

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}{' '}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId}></Menus.Toggle>
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye></HiEye>}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See Details
            </Menus.Button>
            {status === 'unconfirmed' && (
              <Menus.Button
                icon={<HiArrowDownOnSquare></HiArrowDownOnSquare>}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check In
              </Menus.Button>
            )}
            {status === 'checked-in' && (
              <Menus.Button
                icon={<HiArrowUpOnSquare></HiArrowUpOnSquare>}
                onClick={handleCheckOut}
                disabled={isLoadingCheckOut}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open opens='delete'>
              <Menus.Button icon={<HiTrash></HiTrash>} disabled={isDeleting}>
                Delete
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name='delete'>
          <ConfirmDelete
            resourceName='bookings'
            disabled={isDeleting}
            onConfirm={() => {
              deleteBooking(bookingId);
              // moveBack();
            }}
          ></ConfirmDelete>
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
