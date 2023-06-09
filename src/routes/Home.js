import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";


function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (// 평점 8.8 이상의 영화만 가져오기 -> minimum_rating=8.8
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, [])
    // console.log(movies)

    return (
        <div className={styles.container}>
            {loading
                ? (
                    <div className={styles.loader}>
                        <h1>Loading.....</h1>
                    </div>
                    )
                : (
                    <div className={styles.movies}>
                        {movies.map((movie) => (<Movie
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                        />))}
                    </div>

                )}
        </div>);
}

export default Home;