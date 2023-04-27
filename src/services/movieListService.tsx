import env from '../../env';
import { MOVIE_API_URL } from '../config/constants';

export type IMoveList = {
  page: number;
  results: IMoveListItem[];
  total_pages: number;
  total_results: number;
};

export type IMoveListItem = {
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

const fetchPopularMoves = async (): Promise<IMoveList> => {
  const res = await fetch(`${MOVIE_API_URL}/movie/popular`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${env.THE_MOVIE_DB_API_KEY}`,
    },
  });

  const data = await res.json();
  return data;
};

const fetchNowPlayingMovies = async (): Promise<IMoveList> => {
  const res = await fetch(`${MOVIE_API_URL}/movie/now_playing`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${env.THE_MOVIE_DB_API_KEY}`,
    },
  });

  const data = await res.json();
  return data;
};

const fetchUpcomingMovies = async (): Promise<IMoveList> => {
  const res = await fetch(`${MOVIE_API_URL}/movie/upcoming`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${env.THE_MOVIE_DB_API_KEY}`,
    },
  });

  const data = await res.json();
  return data;
};

export default {
  fetchPopularMoves,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
};
