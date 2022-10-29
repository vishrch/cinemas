import {useNavigation} from '@react-navigation/core';
import SectionHeader from '@src/components/SectionHeader';
import {SCREENS} from '@src/constants/navigation';
import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IMovies} from 'src/store/movieReducer';

const Dashboard: React.FC = ({}) => {
  const movies = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.movies,
  );
  const navigation = useNavigation() as any;

  return (
    <View style={styles.container}>
      <SectionHeader
        title="Movies"
        onViewAll={() => navigation.navigate(SCREENS.VIEW_ALL)}
      />
      <SectionHeader title="Video" onViewAll={() => {}} />
    </View>
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
});
