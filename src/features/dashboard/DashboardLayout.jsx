import styled from 'styled-components';
import { useRecentStays } from './useRecentStays.js';
import { useRecentBookings } from './useRecentBookings.js';
import { useCabins } from '../cabins/useCabins.js';
import Stats from './Stats.jsx';
import Spinner from '../../ui/Spinner.jsx';
import SalesChart from './SalesChart.jsx';
import DurationChart from './DurationChart.jsx';
import TodayActivity from '../check-in-out/TodayActivity.jsx';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 40rem auto;
  gap: 2.4rem;
  @media (max-width: 1200px) {
    grid-template-rows: auto auto 40rem auto;
  }

  @media (max-width: 768px) {
    grid-template-rows: auto auto 42.5rem 45rem auto;
  }

  @media (max-width: 550px) {
    grid-template-rows: auto auto 42.5rem 47.5rem auto;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading, error } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading || isLoading2 || isLoading3) return <Spinner></Spinner>;
  // console.log(bookings);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      ></Stats>
      <TodayActivity></TodayActivity>
      <DurationChart confirmedStays={confirmedStays}></DurationChart>
      <SalesChart bookings={bookings} numDays={numDays}></SalesChart>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
