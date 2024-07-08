import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import { ICinemaState } from '@/types';
import { getFilms } from '@/services';

const state: ICinemaState = {
    films: [],
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
    }
};

const actions: ActionTree<ICinemaState, {}> = {
    async fetchFilms({ commit, state }) {
        if (state.films.length > 0) {
            return;
        }
        try {
            const filmsResponse = await getFilms({
                limit: 100,
            });
            commit('setFilms', filmsResponse);
        } catch (error) {
            console.error("Failed to fetch films:", error);
        }
    }
};

const getters: GetterTree<ICinemaState, {}> = {
    filteredFilms: (state) => {
        return state.films.filter(film => film.poster && film.poster.url && (film.name !== null || film.alternativeName !== null));
    },
    filteredFilmsByRating: (state) => {
        return state.films.filter(film => film.poster && film.poster.url && (film.name !== null || film.alternativeName !== null) && film.rating.imdb > 0);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
