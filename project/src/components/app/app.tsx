import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  cardsCount: number;
  placeCount: string;
}

function App({cardsCount, placeCount}: AppProps): JSX.Element {
  return (
    <MainPage cardsCount = {cardsCount} placeCount = {placeCount} />
  );
}

export default App;
