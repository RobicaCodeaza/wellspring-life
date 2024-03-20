import ButtonIcon from '../../ui/ButtonIcon';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {!isLoading ? (
        <HiArrowRightOnRectangle></HiArrowRightOnRectangle>
      ) : (
        <SpinnerMini></SpinnerMini>
      )}
    </ButtonIcon>
  );
}

export default Logout;
