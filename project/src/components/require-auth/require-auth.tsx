import { Navigate, useLocation } from 'react-router-dom';
import { useGetMeQuery } from '../../api/api';
import Loader from '../loader/loader';

function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { isError, isLoading } = useGetMeQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
