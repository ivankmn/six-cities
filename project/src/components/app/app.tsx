import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import Layout from '../layout/layout';
import Main from '../../pages/main';
import Favorites from '../../pages/favorites';
import Login from '../../pages/login';
import Property from '../../pages/property';
import NotFound from '../../pages/not-found';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  cardsCount: number;
  placeCount: string;
};

function App({ cardsCount, placeCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Main cardsCount={cardsCount} placeCount={placeCount} />} />
          </Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Property />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
