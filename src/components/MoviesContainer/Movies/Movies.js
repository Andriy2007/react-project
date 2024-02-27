import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {moviesService} from "../../../services";
import {Movie} from "../Movie/Movie";
import {usePageQuery} from "../../../hooks";
import css from './Movies.module.css';
import {ThemeContext} from "../../../hoc";

const Movies = () => {
    const [movieRes, setMovieRes] = useState({ results: []})
    const {page, genre, prevPage, nextPage} = usePageQuery();
    const { isDarkMode } = useContext(ThemeContext);
    function Scroll () {
        const {pathname} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    useEffect(() => {
        moviesService.getAll(page, genre).then(({data}) => setMovieRes(() => {
            const {results} = data;
            return {
                results
            }
        }))
    }, [page, genre]);

    const light = css.light;
    const dark = css.dark;

    return (
        <div className={`${isDarkMode ? dark : light}`}>
        <div className={css.Movies}>
            <Scroll/>
            <div className={css.MoviesREs}>
            {movieRes.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.pag}>
                <button  onClick={() => prevPage()}> {`<<`} </button>
                <h5 className={css.Page}> Page: {page}</h5>
                <button  onClick={() => nextPage()}> {`>>`}</button>
            </div>
        </div>
        </div>
    );
};

export {
    Movies
}