import { Reviews } from '../mocks/reviews';
import ReviewItem from './review-item';

export default function ReviewList(): JSX.Element {
  return(
    <ul className="reviews__list">
      {Reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}
