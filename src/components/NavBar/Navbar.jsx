import CardWidget from "../CardWidget/CardWidget"
import './NavBar.css';
import logo from './assets/logo.png'

const NavBar =  () => {
    return(
        <header>
            <div className="logos">
                <img className="logos-image" src = {logo} alt="Habia Una Vez Logo" />
                <h2 className="logos-name">Habia Una Vez</h2>
                <p className="logos-pgp">-Showroom-</p>
            </div>

            <nav>
                <ul className="categories">
                    <li><a className="categories-link" href="#">Todos los productos</a></li>
                    <li><a className="categories-link" href="#">Abrigos</a></li>
                    <li><a className="categories-link" href="#">Camisetas</a></li>
                    <li><a className="categories-link" href="#">Pantalones</a></li>
                </ul>
                <CardWidget counterCart = {15}/>
            </nav>
        </header>
    )
}

export default NavBar