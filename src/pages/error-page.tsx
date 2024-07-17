import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

export default function ErrorPage(): JSX.Element {
  return(
    <>
      <h1>Oops. The page is not exist.</h1>
      <Link to={AppRoute.Main}>Return to the main page</Link>
    </>
  );
}
