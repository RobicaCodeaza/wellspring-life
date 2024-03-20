import styled from 'styled-components';
import { HiArrowUpOnSquare, HiTrash } from 'react-icons/hi2';

import { useBooking } from '../bookings/useBooking';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../check-in-out/useCheckout';
import { useDeleteBooking } from '../bookings/useDeleteBooking';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';
import Spinner from '../../ui/Spinner';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Empty from '../../ui/Empty.jsx';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();
  // const status = 'check-in';

  const moveBack = useMoveBack();

  const { checkout, isLoadingCheckOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  function handleCheckOut() {
    checkout(bookingId);
  }

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };
  if (isLoading) return <Spinner></Spinner>;
  if (!booking) return <Empty resourceName='booking'></Empty>;
  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h1'>Booking #{'3'}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <ButtonGroup>
        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        )}
        {status === 'checked-in' && (
          <Button
            icon={<HiArrowUpOnSquare></HiArrowUpOnSquare>}
            onClick={handleCheckOut}
            disabled={isLoadingCheckOut}
          >
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens='delete'>
            <Button
              variation='danger'
              icon={<HiTrash></HiTrash>}
              disabled={isDeleting}
            >
              Delete
            </Button>
          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete
              resourceName='bookings'
              disabled={isDeleting}
              onConfirm={() => {
                deleteBooking(bookingId, { onSettled: () => moveBack() });
              }}
            ></ConfirmDelete>
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
