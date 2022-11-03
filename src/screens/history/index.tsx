import Header from '@src/components/Header';

import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IMovies} from 'src/store/movieReducer';

const BookingHistory: React.FC = ({}) => {
  const tickets = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.tickets,
  );

  const time = new Date().getHours();

  const min = new Date().getMinutes();

  const fullTime = time + ':' + min;
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {tickets.map(i => (
          <View
            style={[
              commonStyles.center,
              commonStyles.mt_8,
              commonStyles.mb_12,
            ]}>
            <Image style={styles.movieImage} source={{uri: i.image}} />
            <Text style={[styles.movie, commonStyles.mt_8]}>{i.movie}</Text>
            <View
              style={[
                commonStyles.flexRow,
                commonStyles.center,
                commonStyles.mt_8,
              ]}>
              <View
                style={[styles.status, fullTime > i.time && styles.started]}
              />
              <Text style={styles.movie}>Time: {i.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BookingHistory;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 50,
  },
  movieImage: {
    height: 200,
    width: 200,
  },
  movie: {
    fontWeight: '600',
  },
  status: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    ...commonStyles.mr_8,
  },
  started: {
    backgroundColor: 'red',
  },
});
