import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { ICinemaState } from '@/types';
import { getFilms } from '@/services';

const state: ICinemaState = {
    films: [],
    response: [],
    loading: false,
    page: 1,
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
        } catch (error) {
            console.error('Failed to fetch films:', error);
        } finally {
            commit('setLoading', false);
        }
    },
    async getFilmsByPage({ commit, state }, payload) {
        commit('setLoading', true);
        try {
            const filmsResponse = await getFilms({
                limit: 100,
                page: payload,
            }).then((res) => {
                commit('setFilms', res);
                commit('setResponse', res);
            });
        } catch (e) { console.log(e) }
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
    isLoading: (state) => state.loading,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
