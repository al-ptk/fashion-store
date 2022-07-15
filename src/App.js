import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <h1>Fashion Store</h1>
      <h2>{t('TestTitle')}</h2>
      <p>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        <button onClick={() => i18n.changeLanguage('pt')}>pt</button>
      </p>
    </div>
  );
}

export default App;
