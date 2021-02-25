import './App.scss';
import { useDispatch } from 'react-redux'

import getHomeData from './services/api-service';

function App() {
  const teste = useDispatch()
  return (
    <div className="App">
      <h1>Iniciando React App</h1>
      <button onClick={getHomeData(teste)}>teste</button>
    </div>
  );
}

export default App;
