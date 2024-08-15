import { Link } from 'react-router-dom';
import { AppRoute, FAVORITES_CLASS_NAME, RATING_STARLINE } from '../const';
import { CardType } from '../types/card-type';
import FavoriteButton from './favorite-button';
type CardItemProps = {
    card: CardType;
    className: string;
}

export default function CardItem(props: CardItemProps): JSX.Element {
  const {card, className} = props;
  const {id, previewImage, price, isFavorite, rating, title, type} = card;
  const imgWidth = className === FAVORITES_CLASS_NAME ? 150 : 260;
  const imsHeight = className === FAVORITES_CLASS_NAME ? 110 : 200;
  const cardsInfoClassName = className === FAVORITES_CLASS_NAME ? 'favorites__card--info' : '';
  return(
    <article className={`${className}__card place-card`} id={id}>
      {card.isPremium &&
              <div className="place-card__mark">
                <span>Premium</span>
              </div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgWidth}
            height={imsHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardsInfoClassName}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton
            isFavorite={isFavorite}
            className={'place-card'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: RATING_STARLINE(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Main}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
