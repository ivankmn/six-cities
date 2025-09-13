import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../api/api';
import { FormEvent, useState } from 'react';

// interface LocationState {
//   from?: {
//     pathname: string;
//     search?: string;
//     hash?: string;
//   };
// }

function LoginPage(): JSX.Element {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [login] = useLoginMutation();
  // const from = (location.state as LocationState)?.from?.pathname || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const submitForm = async () => {
    try {
      await login({ email, password }).unwrap();
      navigate('/');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Login error:', err);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void submitForm(); // Явное указание void
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
