import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from 'react-icons/hi2';
import { useMobileNav } from '../context/ToggleMobileNav.jsx';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Span = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 550px) {
    display: block;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;

    @media (max-width: 768px) {
      width: 3rem;
      height: 3rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const { openMenu, toggleMobileNav } = useMobileNav();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink
            to='/dashboard'
            onClick={openMenu ? toggleMobileNav : ''}
          >
            <HiOutlineHome></HiOutlineHome>
            <Span>Home</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to='/bookings'
            onClick={openMenu ? toggleMobileNav : ''}
          >
            <HiOutlineCalendarDays></HiOutlineCalendarDays>
            <Span>Booking</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/cabins' onClick={openMenu ? toggleMobileNav : ''}>
            <HiOutlineHomeModern></HiOutlineHomeModern>
            <Span>Cabins</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/users' onClick={openMenu ? toggleMobileNav : ''}>
            <HiOutlineUsers></HiOutlineUsers>
            <Span>Users</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to='/settings'
            onClick={openMenu ? toggleMobileNav : ''}
          >
            <HiOutlineCog6Tooth></HiOutlineCog6Tooth>
            <Span>Settings</Span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
