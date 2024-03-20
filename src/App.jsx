import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';

import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import Booking from './pages/Booking';
import Checkin from './pages/Checkin';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import ProtectedRoute from './ui/ProtectedRoute';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

//setting cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        <GlobalStyles></GlobalStyles>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout></AppLayout>
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<Navigate replace to='dashboard'></Navigate>}
              ></Route>
              <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='bookings' element={<Bookings></Bookings>}></Route>
              <Route
                path='bookings/:bookingId'
                element={<Booking></Booking>}
              ></Route>
              <Route
                path='checkin/:bookingId'
                element={<Checkin></Checkin>}
              ></Route>
              <Route path='cabins' element={<Cabins></Cabins>}></Route>
              <Route path='users' element={<Users></Users>}></Route>
              <Route path='settings' element={<Settings></Settings>}></Route>
              <Route path='account' element={<Account></Account>}></Route>
            </Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            succes: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        ></Toaster>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
