import {useNavigate} from "react-router-dom";

import {Badge} from "@mui/material";
import css from './Movie.module.css'
import {Stars} from "../../Stars/Stars";

const Movie = ({movie}) => {
    const { title, poster_path, vote_average, original_language, id} = movie;
    const navigate = useNavigate()
    const goMovieDetails = () => {
        navigate(`/movies/${id}`)
    }

    return (
        <div className={css.Movie} onClick={goMovieDetails}>
            <div className={css.nameMovie}>{title}</div>
            <Badge color="secondary"  anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
            }}  badgeContent={original_language}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={poster_path}/></Badge>
            <div className={css.Star}><Stars vote_average={vote_average}/></div>

        </div>
    );
};

export {
    Movie
}