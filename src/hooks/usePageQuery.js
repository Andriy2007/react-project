import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [params, setParams] = useSearchParams({page: '1'});

    const page = params.get('page');
    const genre  = params.get('genre');
    const query  = params.get('query')
    return {
        page,
        genre,
        query,
         nextPage: () => {

            const paramsObj = Object.fromEntries(params.entries())

            if (paramsObj.page && params && paramsObj.page !== '500') {
                paramsObj.page++
                setParams(paramsObj)
            }
        },

         prevPage: () => {

            const paramObj = Object.fromEntries(params.entries())

            if (paramObj.page && paramObj.page !== '1') {
                paramObj.page--
                setParams(paramObj)
            }
        }
}}

export {
    usePageQuery
}