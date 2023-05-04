import NavBar from './components/NavBar/Navbar';


import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Habia Una Vez"} />

      <ItemDetailContainer productId = {"abrigo-01"} />

    </>
  );
}

export default App;

