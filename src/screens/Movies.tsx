import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IMovies} from 'src/store/movieReducer';

const Movies = () => {
  const movies = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.movies,
  );

  return (
    <View style={styles.container}>
      <Text>rrrrr</Text>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.center,
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
