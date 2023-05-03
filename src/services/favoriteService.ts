import firestore from '@react-native-firebase/firestore';

import { ID } from '../config/api';
import { currentUser } from '../context/AuthProvider';
import { MoviePreview } from './movieListService';

export type FavoriteMovie = MoviePreview & {
  updatedAt: number;
  userId: ID;
};

const favoriteCollections = firestore().collection<FavoriteMovie>('favorites');

const serverTimestamp = () => firestore.FieldValue.serverTimestamp();

const extractFavoriteMovieInfo = (movie: MoviePreview) => {
  const {
    id,
    title,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    vote_count,
  } = movie;

  return {
    id,
    title,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    vote_count,
  };
};

const isFavorite = async (movieId: ID, userId?: ID) => {
  const uid = userId || currentUser?.uid;
  const docId = `${uid}${movieId}`;

  const res = await favoriteCollections.doc(docId).get();

  return res.data() || false;
};

type AddFavoriteInput = MoviePreview & { userId?: ID };

const addFavorite = async ({ userId, ...movie }: AddFavoriteInput) => {
  const uid = userId || currentUser?.uid;
  const favoriteMovie = extractFavoriteMovieInfo(movie);

  const input = {
    ...favoriteMovie,
    userId: uid!,
    updatedAt: serverTimestamp() as any,
  };
  const docId = `${uid}${movie.id}`;

  await favoriteCollections.doc(docId).set(input);

  return input;
};

type RemoveFavoriteInput = { movieId: ID; userId?: ID };

const removeFavorite = async ({ movieId, userId }: RemoveFavoriteInput) => {
  const uid = userId || currentUser?.uid;
  const docId = `${uid}${movieId}`;

  await favoriteCollections.doc(docId).delete();

  return movieId;
};

const getFavoriteMovies = async (userId?: ID) => {
  const uid = userId || currentUser?.uid;

  const res = await favoriteCollections
    .where('userId', '==', uid)
    .orderBy('updatedAt', 'desc')
    .get();

  return res.docs.map((doc) => doc.data());
};

export default {
  isFavorite,
  getFavoriteMovies,
  serverTimestamp,
  addFavorite,
  removeFavorite,
};
