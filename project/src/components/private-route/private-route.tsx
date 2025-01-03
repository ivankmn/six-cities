import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts/app-route';
import { AuthorizationStatus } from '../../consts/authorization-status';

type PriveRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({ authorizationStatus, children }: PriveRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
