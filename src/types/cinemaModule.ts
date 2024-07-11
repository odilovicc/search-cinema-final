interface Rating {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

interface Votes {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

interface Poster {
    url: string;
    previewUrl: string;
}

interface Genre {
    name: string;
}

interface Country {
    name: string;
}

export interface Film {
    id: number;
    name: string;
    alternativeName: string | null;
    enName: string | null;
    type: string;
    typeNumber: number;
    year: number;
    description: string;
    shortDescription: string | null;
    status: string | null;
    rating: Rating;
    votes: Votes;
    movieLength: number;
    totalSeriesLength: number | null;
    seriesLength: number | null;
    ratingMpaa: string | null;
    ageRating: number;
    poster: Poster;
    genres: Genre[];
    countries: Country[];
    top10: number | null;
    top250: number | null;
    isSeries: boolean;
    ticketsOnSale: boolean;
}

export interface ICinemaState {
    films: Film[],
    loading: boolean,
    response: Object[],
    page: number,
    foundFilm: Film[] | String,
    errors: Object[] | Array<any>
}