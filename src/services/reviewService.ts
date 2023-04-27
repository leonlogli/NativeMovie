import api, { ID } from '../config/api';
import { MOVIE_API_URL } from '../config/constants';

export type Reviews = {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};

export type Review = {
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

const getReviews = async (movieId: ID) => {
  return api.get<Reviews>(`${MOVIE_API_URL}/movie/${movieId}/reviews`);
};

export default {
  getReviews,
};
