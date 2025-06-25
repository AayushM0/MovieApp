import MovieCard from "../components/MovieCard";
import { use, useState,useEffect } from "react";
import { search,getPopularMovies } from "../services/api";
import "./home.css"

function Home(){
    // const movies=[
    //     {id : 1 ,title : "avengers"},{id : 2,title:"gone girl"} , {id : 3 , title : "se7en"}
    // ];
    const [movies,setMovies]=useState([]);
    const [error,setError] =useState(null);
    const [loading,setLoading] =useState(true);
    useEffect(()=>{
        const loadPopularMovies = async() => {
            try{
                const popularMovies= await getPopularMovies()
                setMovies(popularMovies);
            }
            catch(err){
                console.log(err);
                setError("Failed to Load");
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])


    const [query,setQuery]=useState("");

    const handlesearch = async(e)=>{
        e.preventDefault()
        if(!query.trim()) return
        if(loading) return;

        setLoading(true);

        

        try{
            const searchedMovies= await search(query);
            setMovies(searchedMovies)

        }
        catch(err){
            console.log(err)
            setError("No Movies Found..")
        }
        finally{
            setLoading(false);
        }

    }

    return (
        <div className="hom" onSubmit={handlesearch}>
            <form className="Search-form">
                <input type="text" placeholder = "Search for Movies..." className="search-input" value={query} onChange={(e)=> (setQuery(e.target.value))}/>
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-card-container">
            
            <h3 className="pop">Popular Movies</h3>

            {error  && <div>{error}</div> }

            {loading ? <div className="loading-message">Loading...</div> : <div className="Movies-Grid">
                {movies.map((mo) => (
                    
                     <MovieCard movie={mo} key={mo.id} />
                    ))}
            </div>}

            </div>
            
            
        </div>
    );
}

export default Home