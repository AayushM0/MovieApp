import { createContext,useState,useEffect,useContext, Children } from "react";

const MovieContext= createContext()

export const useMC=()=>useContext(MovieContext);

export const MovieProvider =({children})=>{

    const [Favorites,setFavorites] = useState([])

    useEffect(()=>{
        const storedfavs=localStorage.getItem("favorites")
        if(storedfavs) setFavorites(JSON.parse(storedfavs))
    },[])

    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(Favorites))
    },[Favorites])

    const addFavs = (movie)=>{
        setFavorites(prev=>[...prev,movie])

    }

    const removeFavs=(movieid) =>{
        setFavorites(prev=> prev.filter(movie => movie.id !== movieid))
    }

    const isFavorites = (movieID) => {
        return Favorites.some(movie=> movie.id === movieID)
    }

    const value={
        Favorites,
        addFavs,
        removeFavs,
        isFavorites
    }


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}