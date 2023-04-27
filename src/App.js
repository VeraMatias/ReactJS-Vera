import './App.css';
import NavBar from './components/NavBar/Navbar';


import ItemListContainer from './container/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Habia Una Vez"} />
    </>
  );
}

export default App;
