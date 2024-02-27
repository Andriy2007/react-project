import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import {SearchForm} from "../SearchContainer";
import css from './Header.module.css';
import {Button, ThemeContext} from "../../hoc";
import {Switch} from "@mui/material";

const Header = () => {
    const { isDarkMode } = useContext(ThemeContext);

    const light = css.light;
    const dark = css.dark;

    return (
        <div className={`${isDarkMode ? dark : light}`}>
        <div className={css.Header}>
            <h2 className={css.Logo}><NavLink to={'/'}>MovieDB</NavLink></h2>
            <div className={css.genres}><NavLink to={'/genres'}>Genres</NavLink></div>
            <SearchForm/>
            <NavLink to={`/`}>Acount</NavLink>
            <Button className={css.Button}>Switch theme<Switch {...isDarkMode} defaultChecked />
            </Button>
            </div>
        </div>
    );
};

export {
    Header
}