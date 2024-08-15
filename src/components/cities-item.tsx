import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

type CitiesItemProps = {
    name: string;
    className: string;
};

export default function CitiesItem(props: CitiesItemProps): JSX.Element {
  const {name, className} = props;
  return(
    <li key={name} className="locations__item">
      <Link className={className} to={AppRoute.Main}>
        <span>{name}</span>
      </Link>
    </li>
  );
}
