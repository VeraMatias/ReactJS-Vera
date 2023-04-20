import './App.css';
import NavBar from './components/NavBar/Navbar';


import ItemListContainer from './container/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
      
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Habia Una Vez"} />
    </>
  );
}

export default App;
