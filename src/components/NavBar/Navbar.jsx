import './NavBar.css';

import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget"
import logo from './assets/logo.png'
import {CartContext} from '../../context/CartContext'
import { useContext } from 'react';

const NavBar =  () => {
    const {quantityCart} = useContext(CartContext)

    return(
        <header>
            <div className="logos">
                <img className="logos-image" src = {logo} alt="Habia Una Vez Logo" />
                <h2 className="logos-name">Habia Una Vez</h2>
                <p className="logos-pgp">-Showroom-</p>
            </div>

            <nav>
                <ul className="categories">
                    <NavLink to={"/"} className={"categories-link"}>Todos los productos </NavLink>
                    <NavLink to={"/category/Abrigos"} className={"categories-link"}>Abrigos </NavLink>
                    <NavLink to={"/category/Camisetas"} className={"categories-link"}>Camisetas </NavLink>
                    <NavLink to={"/category/Pantalones"} className={"categories-link right-link"}>Pantalones </NavLink>
                </ul>
                <Link to={"/cart"}>
                    {quantityCart() > 0 &&  <CardWidget counterCart = {quantityCart()}/>}
                </Link>
            </nav>
        </header>
    )
}

export default NavBar