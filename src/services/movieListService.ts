import api from '../config/api';
import { MOVIE_API_URL } from '../config/constants';

export type MovieList = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviePreview = Pick<
  Movie,
  | 'id'
  | 'title'
  | 'poster_path'
  | 'backdrop_path'
  | 'vote_average'
  | 'release_date'
  | 'vote_count'
>;

const getPopularMoves = async () => {
  return api.get<MovieList>(`${MOVIE_API_URL}/movie/popular`);
};

const getNowPlayingMovies = async () => {
  return api.get<MovieList>(`${MOVIE_API_URL}/movie/now_playing`);
};

const getUpcomingMovies = async () => {
  return api.get<MovieList>(`${MOVIE_API_URL}/movie/upcoming`);
};

export default {
  getPopularMoves,
  getNowPlayingMovies,
  getUpcomingMovies,
};
