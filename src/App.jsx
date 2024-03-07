import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//setting cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route
              index
              element={<Navigate replace to='dashboard'></Navigate>}
            ></Route>
            <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='bookings' element={<Bookings></Bookings>}></Route>
            <Route path='cabins' element={<Cabins></Cabins>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
            <Route path='settings' element={<Settings></Settings>}></Route>
            <Route path='account' element={<Account></Account>}></Route>
          </Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
