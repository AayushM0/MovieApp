import MovieCard from "./components/MovieCard"; 
import th from "./assets/th.jpg"
import Home from "./pages/home";
import "./App.css";
import Fav from "./pages/Favorite";
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/navbar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {

  return (
    <MovieProvider>
      <NavBar/>
    <main className="Main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Favorites" element={<Fav/>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}



export default App
