import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { Film, ICinemaState } from '@/types';
import { getFilms, searchFilm } from '@/services';

const state: ICinemaState = {
    films: [],
    response: [],
    foundFilm: [] as Film[] | String,
    loading: false,
    page: 1,
    errors: [] as string[],
};

const mutations: MutationTree<ICinemaState> = {
    setFilms(state, payload) {
        if (Array.isArray(payload)) {
            state.films = payload;
        } else if (payload.docs && Array.isArray(payload.docs)) {
            state.films = payload.docs;
        } else {
            console.error("Payload is not in expected format:", payload);
        }
    },
    setResponse(state, payload) {
        state.response = payload;
    },
    setLoading(state, isLoading: boolean) {
        state.loading = isLoading;
    },
    setPage(state, page: number) {
        state.page = page;
    },
    setErrors(state, errors: string[]) {
        state.errors = errors;
    },
};

const actions: ActionTree<ICinemaState, {}> = {
    async fetchFilms({ commit, state }) {
        commit('setLoading', true);
        try {
            const filmsResponse = await getFilms({
                limit: 100,
            }).then((res) => {
                commit('setFilms', res);
                commit('setResponse', res);
            });
        } catch (error: Error | any) {
            console.error('Failed to fetch films:', error);
            commit('setErrors', error.response.data.message);
        } finally {
            commit('setLoading', false);
        }
    },
    async getFilmsByPage({ commit, state }, payload) {
        commit('setLoading', true);
        try {
            const filmsResponse = await getFilms({
                limit: 250,
                page: payload,
            }).then((res) => {
                commit('setFilms', res);
                commit('setResponse', res);
            });
        } catch (error: Error | any) {
            console.error('Failed to fetch films by page:', error);
            commit('setErrors', error.response.data.message);
        } finally {
            commit('setLoading', false);
        }
    },
    async searchFilms({ commit, state }, payload) {
        commit('setLoading', true);
        try {
            const filmsResponse = await searchFilm(payload).then((res) => {
                state.foundFilm = res;
                console.log(res)
                if(res.docs.length <= 0) {
                    state.foundFilm = "Ничего не найдено"
                }
            });
        } catch (error: Error | any) {
            console.error('Failed to search films:', error);
            commit('setErrors', error.response.data.message);
        } finally {
            commit('setLoading', false);
        }
    },
    async searchFilmByPage({ commit, state }, payload) {
        commit('setLoading', true);
        try {
            const filmsResponse = await searchFilm(payload).then((res) => {
                state.foundFilm = res;
                console.log(res)
                if(res.docs.length <= 0) {
                    state.foundFilm = "Ничего не найдено"
                }
            });
        } catch (error: Error | any) {
            console.error('Failed to search films:', error);
            commit('setErrors', error.response.data.message);
        } finally {
            commit('setLoading', false);
        }
    }
};

const getters: GetterTree<ICinemaState, {}> = {
    filteredFilms: (state) => {
        return state.films.filter(
            (film) =>
                film.poster &&
                film.poster.url &&
                (film.name !== null || film.alternativeName !== null)
        );
    },
    filteredFilmsByRating: (state) => {
        return state.films.filter(
            (film) =>
                film.poster &&
                film.poster.url &&
                (film.name !== null || film.alternativeName !== null) &&
                film.rating.imdb > 0
        );
    },
    filteredFilmsByYear: (state) => {
        return state.films.filter(
            (film) =>
                film.poster &&
                film.poster.url &&
                (film.name !== null || film.alternativeName !== null) &&
                film.year > 2022
        );
    },
    isLoading: (state) => state.loading,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
