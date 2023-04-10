import { useState, useEffect } from "react";
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            // 평점 8.8 이상의 영화만 가져오기 -> minimum_rating=8.8
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, [])
    console.log(movies)

    return <div>
        {loading
            ? <h1>Loading.....</h1>
            : movies.map((movie) =>
                <div key = {movie.index}>
                    <img src = {movie.medium_cover_image} />
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map((g, index) => <li key = {index}>{g}</li>)}
                    </ul>
                </div>)
        } </div>;
};

export default App;
