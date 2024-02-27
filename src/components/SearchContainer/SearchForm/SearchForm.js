import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from './SearchForm.module.css'

const SearchForm = () => {
    const {reset, register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const submit = async ({searchText}) => {

        const formatSearchText = searchText.trim()
        await navigate(`/search?page=1&query=${formatSearchText}`)
        reset()
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div className={css.inputForm}>
                <label className={css.search}>
                      <input className={css.searchText} type="text" placeholder={'Type to search...'} {...register('searchText')}/>
                </label>
                <div className={css.buttonSearch} onClick={handleSubmit(submit)}>
                    <img width="36" height="36" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-search-internet-marketing-service-flaticons-flat-flat-icons-2.png" alt="external-search-internet-marketing-service-flaticons-flat-flat-icons-2"/>
                </div>
            </div>
        </form>
    );
};

export {
    SearchForm
}