import { useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

import { moviesService} from "../../../services";
import {Genre} from "../../GenresContainer";
import css from './MovieDetails.module.css';
import {Stars} from "../../Stars/Stars";
import {ThemeContext} from "../../../hoc";

const MovieDetails = () => {
    const [moviesDet, setMoviesDet] = useState([])
    const {id} = useParams();
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        moviesService.getById(id).then(({data}) => setMoviesDet(data))
    }, [id]);

    const light = css.light;
    const dark = css.dark;

        return (
            <div className={`${isDarkMode ? dark : light}`}>
                <div className={css.main}>
                <img className={css.img} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${moviesDet.poster_path}`}/>
                <div className={css.description}>
                    <div><h1>{moviesDet.title}</h1>
                        <div><p>Release Date: {moviesDet.release_date}</p>
                            {moviesDet.genres && <p className={css.genresMap}>{moviesDet.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}</p>}
                            <p>User Score: <Stars vote_average={moviesDet.vote_average}/></p>
                        </div>
                    </div>
                    <div><h3>{moviesDet.tagline}</h3></div>
                </div>
                <div className={css.view}>
                    <h3>Overview</h3>
                    <p>{moviesDet.overview}</p>
                </div>
            </div>
            </div>
        );
    };

export {
    MovieDetails
}