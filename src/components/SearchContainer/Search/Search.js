import {useContext, useEffect, useState} from "react";

import {moviesService} from "../../../services";
import {Movie} from "../../MoviesContainer";
import { usePageQuery} from "../../../hooks";
import css from './Search.module.css'
import {ThemeContext} from "../../../hoc";

const Search  = () => {
    const [searchRes,  setSearchRes] = useState({ results: []})
    const {query, page,  prevPage, nextPage} = usePageQuery();
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        moviesService.search(query, page).then(({data}) => setSearchRes(() => {
            const {results} = data;
            return {
                results
            }
        }))


    }, [query, page]);

    const light = css.light;
    const dark = css.dark;

    return (
        <div className={`${isDarkMode ? dark : light}`}>
        <div className={css.Movies}>
            <div className={css.MoviesREs}>
                {searchRes.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
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
    Search
}