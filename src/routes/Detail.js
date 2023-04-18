import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from './Detail.module.css';

function Detail() {
    const {tomato} = useParams()
    console.log(tomato);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${tomato}`)
        ).json();
        console.log(json)
        setData(json.data.movie);
        setLoading(false);
    };
    console.log(data)

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div className={styles.container}>
            {loading
                ? (
                    <div className={styles.loader}>
                        <h1> Loading...</h1>
                    </div>
                )
                : (
                    <div className={styles.detail}>
                        <a href={data.url}>
                            <h2 className={styles.detail__title}> {data.title} </h2>
                        </a>
                        <img src={data.medium_cover_image}/>
                        <h4 className={styles.detail__year}> Year: {data.year}</h4>
                        <h4> Rating: {data.rating}</h4>

                        <label className={styles.detail__subtitle}>Genres</label>
                        <ul className={styles.detail__contents}>
                            {data.genres.map((i) => <li key={i}>{i}</li>)}
                        </ul>

                        <label className={styles.detail__subtitle}>Description</label>
                        <p className={styles.detail__contents}>{data.description_full}</p>
                    </div>
                )
            }
        </div>
    );
}

export default Detail;