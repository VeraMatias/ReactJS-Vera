import NavBar from './components/NavBar/Navbar';


import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Habia Una Vez"} />
      <ItemCount  initial={0} stock={4} onAdd={(count) => console.log("Cantidad:",count)}/>

    </>
  );
}

export default App;
