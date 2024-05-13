
import { useEffect, useState } from "react";
import React from "react";
import SearchIcon from './search.svg';
import './App.css';
import MovieCard from "./MovieCard";
//fc3c012

const API_URL='http://www.omdbapi.com?apikey=fc3c012';
const movie = {
    "Title": "Deadpool",
    "Year": "2016",
    "imdbID": "tt1431045",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Deadpool');
    }, [])


    return(
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {searchMovies(searchTerm)}}
                />
            </div>

            {movies?.length > 0
              ? (
                <div className='container'>
                    {movies.map((movie) => (
                    <MovieCard movie={movie} />
                    ))}
                </div> 
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}
export default App;