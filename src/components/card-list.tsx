import { Cards } from '../mocks/cards';
import CardItem from './card-item';

type PlacesListProps = {
  className: string;
}

export default function PlacesList({className}: PlacesListProps): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {Cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          className={className}
        />))}
    </div>
  );
}
