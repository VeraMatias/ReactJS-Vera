import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';




function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path = "/" element={<ItemListContainer greeting={"Bienvenidos a Habia Una Vez"} />}/>
        <Route path = "/category/:categoryID" element={<ItemListContainer greeting={"Bienvenidos a Habia Una Vez"} />}/>
        <Route path = "/item/:itemID" element={<ItemDetailContainer/>}/>
        <Route path = "/cart" element ={<Cart/>}/>
        <Route path = "*" element={"error 404"}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

