import { useMC } from "../contexts/MovieContext"
import "./MovieCard.css"

function MovieCard ({movie}){

    const {isFavorites,addFavs,removeFavs,Favorites}=useMC();
    
    const favorite = isFavorites(movie.id)

    const onFavClick = (e)=>{
        e.preventDefault()
        if(favorite) removeFavs(movie.id)
        else addFavs(movie)
    }
    return (
        <div className="Movie-card">
            <div className="Movie-image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button className={`fav-button ${favorite ? "active" : ""}`} onClick={onFavClick}>♥</button>
                </div>
            </div>
            <div className="Movie-title"><h3>{movie.title}</h3></div>
    

        </div>
    )
}

export default MovieCard