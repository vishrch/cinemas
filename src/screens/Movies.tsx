import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IMovies} from '../store/movieReducer';

const Movies = () => {
  const movies = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.movies,
  );

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{color: 'white'}}>rrrrr</Text>
    </View>
  );
};

export default Movies;
