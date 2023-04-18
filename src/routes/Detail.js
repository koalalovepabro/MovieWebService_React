import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        <div>
            {loading
                ? <h1> Loading...</h1>
                : (<div>
                        <a href ={data.url}>
                            <h2 > {data.title} </h2>
                        </a>
                        <img src={data.medium_cover_image}/>
                        <h4> Year: {data.year}</h4>
                        <h4> Rating: {data.rating}</h4>
                        <h4> Genres: {data.genres.map((i) => (`${i}. `))} </h4>
                        <h4>Description</h4>
                        <p>{data.description_full}</p>
                    </div>
                )
            }
        </div>
    );
}

export default Detail;