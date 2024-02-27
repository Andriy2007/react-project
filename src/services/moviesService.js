import {apiService} from "./apiService";
import {urls} from "../constants";

const moviesService = {
    getAll: (page, with_genres) => apiService.get(urls.movies, {params: {page, with_genres}}),
    getById: (id) => apiService.get(`${urls.movie}/${id}`),
    search: (query, page) => apiService.get(urls.search, {params: {page, query}}),
}

export {
    moviesService
}