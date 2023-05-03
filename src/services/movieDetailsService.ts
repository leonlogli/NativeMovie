import api, { ID } from '../config/api';
import { MOVIE_API_URL } from '../config/constants';
import { Movie, MovieList } from './movieListService';

export type MovieDetails = Omit<Movie, 'genre_ids'> & {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
};

export type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: null;
  backdrop_path: null;
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: null;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

const getMovie = async (movieId: ID) => {
  return api.get<MovieDetails>(`${MOVIE_API_URL}/movie/${movieId}`);
};

const getRecommendations = async (movieId: ID) => {
  return api.get<MovieList>(`/movie/${movieId}/recommendations`);
};

export default {
  getMovie,
  getRecommendations,
};
