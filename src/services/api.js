const API_KEY="46d24cbec9db93d1df9d55defd485a1e"
const API_URL="https://api.themoviedb.org/3"



export const getPopularMovies = async() =>{
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data=await response.json();
    return data.results;
}

export const search = async(query) => {
    const response= await fetch (`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data=await response.json()
    return data.results;
}
