import { Link } from 'react-router-dom';
import { CardType } from '../types/card-type';
import { getCardsByCity } from '../utils/getCardsByCity';
import { AppRoute } from '../const';
import CardItem from './card-item';

type FavoritesListProps = {
    favoriteCards: CardType[];
};

export default function FavoritesList({favoriteCards}: FavoritesListProps): JSX.Element {
  const cardsByCity = getCardsByCity(favoriteCards);
  return(
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(cardsByCity).map(([city, cards]) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Main}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {cards.map((card) => <CardItem key={card.id} className="favorites" card={card}/>)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
