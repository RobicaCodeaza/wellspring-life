import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1.Load the aauthenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 3.If there is No authenticated redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isLoading, isAuthenticated, navigate]
  );

  // 2.While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner></Spinner>
      </FullPage>
    );

  // 4. If there is a user, render the app
  if (isAuthenticated) return <>{children}</>;
}

export default ProtectedRoute;
