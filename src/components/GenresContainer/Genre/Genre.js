import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'

const Genre = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate()

    const goMovies = () => {
        navigate(`/genres/movies?page=1&genre=${id}`, {replace: true})

    }
        return (
        <div className={css.Genre}>
            <div className={css.buttonGenre} onClick={goMovies}>{name}</div>
        </div>
    );
};

export {
    Genre
}