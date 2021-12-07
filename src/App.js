import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ListItems from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ListItems/>
    </div>

  );
}

export default App;
