import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineBanknotes,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat.jsx';
import { formatCurrency } from '../../utils/helpers.js';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Bookings
  const numBookings = bookings.length;

  // 2. Sales
  const sales = bookings.reduce(
    (acc, cur) => (cur.isPaid ? acc + cur.totalPrice : acc + 0),
    0
  );

  // 3. Checkins
  const checkins = confirmedStays.length;

  //4. Occupancy Rate
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title='Bookings'
        color='blue'
        icon={<HiOutlineBriefcase></HiOutlineBriefcase>}
        value={numBookings}
      ></Stat>
      <Stat
        title='Sales'
        color='green'
        icon={<HiOutlineBanknotes></HiOutlineBanknotes>}
        value={formatCurrency(sales)}
      ></Stat>
      <Stat
        title='Check-Ins'
        color='indigo'
        icon={<HiOutlineCalendarDays></HiOutlineCalendarDays>}
        value={checkins}
      ></Stat>
      <Stat
        title='Occupancy Rate'
        color='yellow'
        icon={<HiOutlineChartBar></HiOutlineChartBar>}
        value={Math.round(occupation * 100) + '%'}
      ></Stat>
    </>
  );
}

export default Stats;
