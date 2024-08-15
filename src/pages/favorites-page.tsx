import { Link } from 'react-router-dom';
import FavoritesList from '../components/favorites-list';
import Header from '../components/header';
import { AppRoute, getMockFavoriteCards } from '../const';

export default function FavoritesPage(): JSX.Element | undefined {
  if (getMockFavoriteCards.length) {
    return(
      <div className="page">
        <header className="header">
          <Header/>
        </header>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <FavoritesList favoriteCards={getMockFavoriteCards}/>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </Link>
        </footer>
      </div>
    );
  } else {
    return(
      <div className="page page--favorites-empty">
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </Link>
        </footer>
      </div>
    );
  }

}
