import { OFFER_CLASS_NAME } from '../const';

type FavoriteButtonProps = {
    className: string;
    isFavorite: boolean;
}

export default function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const {className, isFavorite} = props;
  const imgWidth = className === OFFER_CLASS_NAME ? 31 : 18;
  const imgHeight = className === OFFER_CLASS_NAME ? 33 : 19;
  return(
    <button
      className={isFavorite ? `${className}__bookmark-button place-card__bookmark-button--active button` : `${className}__bookmark-button button`}
      type="button"
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={imgWidth}
        height={imgHeight}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>

      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
