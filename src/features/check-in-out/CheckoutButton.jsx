import Button from '../../ui/Button';
import { useCheckout } from './useCheckout.js';

function CheckoutButton({ bookingId }) {
  const { checkout, isLoading } = useCheckout();

  return (
    <Button
      variation='primary'
      size='small'
      disabled={isLoading}
      onClick={() => checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
