import Header from '@src/components/Header';
import MovieListItem from '@src/components/MovieListItem';
import {COLORS, ScreenWidth} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IMovies} from 'src/store/movieReducer';

const ViewAll: React.FC = ({}) => {
  const movies = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.movies,
  );

  return (
    <View style={styles.container}>
      <Header title="Movies" />

      <FlatList
        numColumns={3}
        data={movies}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={item => (
          <MovieListItem
            showName
            item={item.item}
            containerStyle={{width: ScreenWidth / 3.5}}
            style={styles.movieImage}
          />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[commonStyles.center, commonStyles.mt_12]}
      />
    </View>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 50,
  },
  movieImage: {
    height: 170,
    borderRadius: 10,
  },
});
