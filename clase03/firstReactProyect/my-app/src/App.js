import logo from './logo.svg';
import './App.css';
import Home from './views/Home';

function App() {
  const msg = 'Soy codigo en Practicum';
  return (
    <div className="App">
      <h1>Hola ninjas!!!</h1>
      <Home message = {msg }/>
      <Home />
    </div>
  );
}

export default App;
