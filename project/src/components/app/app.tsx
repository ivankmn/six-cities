import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts/app-route';
import Layout from '../layout/layout';
import Main from '../../pages/main';
import Room from '../../pages/property';
import Favorites from '../../pages/favorites';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import RequireAuth from '../require-auth/require-auth';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <RequireAuth>
                <Favorites />
              </RequireAuth>
            }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
