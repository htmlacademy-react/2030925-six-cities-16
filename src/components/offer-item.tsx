import { RATING_STARLINE } from '../const';
import { CardType } from '../types/card-type';
import ReviewList from './review-list';

type OfferItemProps = {
    card: CardType;
}

export default function OfferItem(props: OfferItemProps): JSX.Element {
  const {card} = props;
  const {isPremium, isFavorite, rating, title, type, maxBedrooms, maxAdults, price, description, reviewsCount} = card;
  return(
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium &&
          <div className="offer__mark">
            <span>Premium</span>
          </div>}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {title}
          </h1>
          <button className="offer__bookmark-button button" type="button">
            <svg className="offer__bookmark-icon" width={31} height={33}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In Bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: RATING_STARLINE(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">{type}</li>
          <li className="offer__feature offer__feature--bedrooms">
            {maxBedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
          </li>
          <li className="offer__feature offer__feature--adults">
          Max {maxAdults > 1 ? 'adults' : 'adult'}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">{price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            <li className="offer__inside-item">Wi-Fi</li>
            <li className="offer__inside-item">Washing machine</li>
            <li className="offer__inside-item">Towels</li>
            <li className="offer__inside-item">Heating</li>
            <li className="offer__inside-item">Coffee machine</li>
            <li className="offer__inside-item">Baby seat</li>
            <li className="offer__inside-item">Kitchen</li>
            <li className="offer__inside-item">Dishwasher</li>
            <li className="offer__inside-item">Cabel TV</li>
            <li className="offer__inside-item">Fridge</li>
          </ul>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
              <img
                className="offer__avatar user__avatar"
                src="img/avatar-angelina.jpg"
                width={74}
                height={74}
                alt="Host avatar"
              />
            </div>
            <span className="offer__user-name">Angelina</span>
            <span className="offer__user-status">Pro</span>
          </div>
          <div className="offer__description">
            {description}
          </div>
        </div>
        <section className="offer__reviews reviews">
          <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviewsCount}</span>
          </h2>
          <ReviewList/>
          <form className="reviews__form form" action="#" method="post">
            <label className="reviews__label form__label" htmlFor="review">
            Your review
            </label>
            <div className="reviews__rating-form form__rating">
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={5}
                id="5-stars"
                type="radio"
              />
              <label
                htmlFor="5-stars"
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={4}
                id="4-stars"
                type="radio"
              />
              <label
                htmlFor="4-stars"
                className="reviews__rating-label form__rating-label"
                title="good"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={3}
                id="3-stars"
                type="radio"
              />
              <label
                htmlFor="3-stars"
                className="reviews__rating-label form__rating-label"
                title="not bad"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={2}
                id="2-stars"
                type="radio"
              />
              <label
                htmlFor="2-stars"
                className="reviews__rating-label form__rating-label"
                title="badly"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={1}
                id="1-star"
                type="radio"
              />
              <label
                htmlFor="1-star"
                className="reviews__rating-label form__rating-label"
                title="terribly"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </div>
            <textarea
              className="reviews__textarea form__textarea"
              id="review"
              name="review"
              placeholder="Tell how was your stay, what you like and what can be improved"
              defaultValue={''}
            />
            <div className="reviews__button-wrapper">
              <p className="reviews__help">
              To submit review please make sure to set{' '}
                <span className="reviews__star">rating</span> and describe
              your stay with at least{' '}
                <b className="reviews__text-amount">50 characters</b>.
              </p>
              <button
                className="reviews__submit form__submit button"
                type="submit"
                disabled
              >
              Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
