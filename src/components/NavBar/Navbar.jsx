import CardWidget from "../CardWidget/CardWidget"
import './NavBar.css';
import logo from './assets/logo.png'

const NavBar =  () => {
    return(
        <header>
            <div className="logos">
                <img className="logos-imagen" src = {logo} alt="Habia Una Vez Logo" />
                <h2 className="logos-nombre">Habia Una Vez</h2>
                <p className="logos-parrafo">-Showroom-</p>
            </div>

            <nav>
                <ul className="categorias">
                    <li><a className="categorias-link" href="#">Todos los productos</a></li>
                    <li><a className="categorias-link" href="#">Abrigos</a></li>
                    <li><a className="categorias-link" href="#">Camisetas</a></li>
                    <li><a className="categorias-link" href="#">Pantalones</a></li>
                </ul>
                <CardWidget contador = {15}/>
            </nav>
        </header>
    )
}

export default NavBar