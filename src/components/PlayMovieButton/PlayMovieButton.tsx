import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useQuery } from '@tanstack/react-query';

import { TRAILER_BASE_LINK } from '../../config/constants';
import movieDetailsService from '../../services/movieDetailsService';
import { Movie } from '../../services/movieListService';
import MovieVideoModal from '../MovieVideoModal';
import styles from './PlayMovieButton.style';

export type PlayMovieButtonProps = {
  movie: Movie;
};

const PlayMovieButton = ({ movie }: PlayMovieButtonProps) => {
  const [open, setIsModalVisible] = useState(false);

  const query = useQuery(['getVideos', movie.id], ({ queryKey }) =>
    movieDetailsService.getVideos(queryKey[1]),
  );

  const video = query.data?.results[0];
  const videoLink = video ? `${TRAILER_BASE_LINK}${video.key}` : undefined;

  const setOpen = () => {
    setIsModalVisible(!open);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={setOpen}
        disabled={!videoLink}
      >
        <Icons name="play" size={22} color="#000" />
        <Text style={styles.playText}>Play</Text>
      </TouchableOpacity>

      {videoLink && (
        <MovieVideoModal
          uri={videoLink}
          open={open}
          onClose={setOpen}
          title={movie.title}
        />
      )}
    </>
  );
};
export default PlayMovieButton;
