import { Link } from "react-router-dom";
import "./navbar.css"
function NavBar(){
    return (


        <nav className="Navigation">
            <div className="Movie-app">
                <Link className="Movie-App-link" to="/">Movie-App</Link>
            </div>
            <div className="Home-Fav"> 
                <Link to="/" className="Nav-pages">Home</Link>
                <Link to="/favorites" className="Nav-pages">Favorites</Link>
            </div>
        </nav>


    )
}

export default NavBar;