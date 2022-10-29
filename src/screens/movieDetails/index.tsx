import {useRoute} from '@react-navigation/core';
import Button from '@src/components/Button';
import Header from '@src/components/Header';
import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {useCinemas} from 'src/hooks/useCinemas';

const MovieDetails: React.FC = ({}) => {
  const {params} = useRoute() as any;

  const {getFilmDetails, movieDetails} = useCinemas();

  useEffect(() => {
    getFilmDetails(params.item.film_id);
  }, []);

  return (
    <ImageBackground
      source={{uri: movieDetails?.images.poster['1']?.medium?.film_image}}
      style={styles.container}>
      <Header arrowColor={COLORS.WHITE} buttonStyle={styles.backButtonStyle} />
      <View style={[commonStyles.mh_24, commonStyles.mb_24]}>
        <Button
          label="Book Ticket"
          style={{backgroundColor: 'red', ...commonStyles.mb_12}}
          labelStyle={{color: COLORS.WHITE}}
        />
        <Button label="Share" />
      </View>
    </ImageBackground>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  backButtonStyle: {
    backgroundColor: COLORS.BLACK,
    padding: 8,
    borderRadius: 3,
    opacity: 0.3,
  },
});
