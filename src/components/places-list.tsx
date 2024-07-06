import { Cards } from '../mock/cards';
import PlaceCard from './place-card';

export default function PlacesList(): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {Cards.map((card) => (
        <PlaceCard
          key={card.id}
          id={card.id}
          isPremium={!!card.isPremium}
          price={card.price}
          isFavorite={!!card.isFavorite}
          type={card.type}
          title={card.title}
        />))}
    </div>
  );
}
