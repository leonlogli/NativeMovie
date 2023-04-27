import env from '../../env';
import { MOVIE_API_URL } from '../config/constants';

export type IReviews = {
  id: number;
  page: number;
  results: IReview[];
  total_pages: number;
  total_results: number;
};

export type IReview = {
  author: string;
  author_details: IReviewAuthor;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type IReviewAuthor = {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: null | number;
};

const fetchReviews = async (movieId: number): Promise<IReviews> => {
  const res = await fetch(`${MOVIE_API_URL}/movie/${movieId}/reviews`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${env.THE_MOVIE_DB_API_KEY}`,
    },
  });

  const data = await res.json();
  return data;
};

export default {
  fetchReviews,
};
