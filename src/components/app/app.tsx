import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import OfferPage from '../../pages/offer-page';
import ErrorPage from '../../pages/error-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placesCount: number;
    authorizationStatus: AuthorizationStatus;
}

export default function App({placesCount, authorizationStatus}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placesCount={placesCount}/>}
        />
        <Route
          path={AuthorizationStatus.Auth ? AppRoute.Favorites : AppRoute.Login}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage authorizationStatus={authorizationStatus}/>}
        />
        <Route
          path={AppRoute.Error}
          element={<ErrorPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
