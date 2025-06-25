import {useMC} from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
import "./Favorite.css"




function Fav(){

    const {Favorites} = useMC()

    if(Favorites){
        return <div >
            <h2>Welcome to the Favorites Page</h2>
            <div className="Movies-Grid">
                {Favorites.map((mo) => (
                    
                     <MovieCard movie={mo} key={mo.id} />
                    ))}
            </div></div>
    }

    return (
        <div>
            <h2>Welcome to the favorites pages</h2>
            <p>Add your favorites from the home page and they will appear here</p>
        </div>
    )
}

export default Fav;