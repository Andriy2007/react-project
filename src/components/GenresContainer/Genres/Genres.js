import {useContext, useEffect, useState} from "react";

import {genreService} from "../../../services";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'
import {ThemeContext} from "../../../hoc";

const Genres = () => {
    const [genresRes, setGenres] = useState({genres: []})
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(() => {
            const {genres} = data;
            return {
                genres
            }
        }))
    }, []);
    const light = css.light;
    const dark = css.dark;

    return (
        <div className={`${isDarkMode ? dark : light}`}>
        <div className={css.Genres}>
            {genresRes.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
        </div>
    );
};


export {
    Genres
}