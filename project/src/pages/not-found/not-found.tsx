import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/app-route';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>Page not found</h1>
      <br />
      <Link to={AppRoute.Root}>Перейти на главную страницу </Link>
    </>
  );
}

export default NotFound;
