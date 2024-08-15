import { ACTIVE_CITY, CITIES } from '../const';
import CitiesItem from './cities-item';

export default function CitiesList(): JSX.Element {
  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <CitiesItem
              key={city}
              name={city}
              className={`locations__item-link tabs__item ${ACTIVE_CITY === city ? 'tabs__item--active' : ''}`}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
