import {useNavigation} from '@react-navigation/core';
import MovieListItem from '@src/components/MovieListItem';
import SectionHeader from '@src/components/SectionHeader';
import {SCREENS} from '@src/constants/navigation';
import {COLORS, ScreenWidth} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {IMovies} from 'src/store/movieReducer';

const Dashboard: React.FC = ({}) => {
  const movies = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.movies,
  );
  const navigation = useNavigation() as any;
  const [showFilterModal, setFilterModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <SectionHeader
        title="Movies"
        onViewAll={() => navigation.navigate(SCREENS.VIEW_ALL)}
        showFilter
        onFilter={() => setFilterModal(true)}
      />
      <FlatList
        data={movies.slice(0, 10)}
        renderItem={item => (
          <MovieListItem item={item} style={styles.movieImage} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      {showFilterModal && <></>}

      <SectionHeader title="Video" onViewAll={() => {}} />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 50,
  },
  movieImage: {
    backgroundColor: 'red',
    height: 200,
    borderRadius: 20,
    width: ScreenWidth / 3,
  },
});
