import { NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget"
import './NavBar.css';
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
                    <NavLink to={"/category/*"} className={"categories-link"}>Todos los productos </NavLink>
                    <NavLink to={"/category/Abrigos"} className={"categories-link"}>Abrigos </NavLink>
                    <NavLink to={"/category/Camisetas"} className={"categories-link"}>Camisetas </NavLink>
                    <NavLink to={"/category/Pantalones"} className={"categories-link"}>Pantalones </NavLink>
                </ul>
                <CardWidget counterCart = {quantityCart()}/>
            </nav>
        </header>
    )
}

export default NavBar