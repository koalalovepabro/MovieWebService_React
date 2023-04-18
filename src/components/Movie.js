import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import styles from "./Movie.module.css";


function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>
                {
                    summary.split(' ').length > 50
                        ? summary.split(' ').slice(0, 50).join(' ') + '...'
                        : summary
                }
            </p>
            <ul>
                {genres.map((g) => (<li key={g}>{g}</li>))}
            </ul>
        </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;