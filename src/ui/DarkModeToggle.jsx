import { useDarkMode } from '../context/DarkModeContext.jsx';
import ButtonIcon from './ButtonIcon.jsx';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun></HiOutlineSun>
      ) : (
        <HiOutlineMoon></HiOutlineMoon>
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
