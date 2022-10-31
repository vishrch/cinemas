import {useRoute} from '@react-navigation/core';
import Button from '@src/components/Button';
import Header from '@src/components/Header';
import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useCinemas} from 'src/hooks/useCinemas';
import IcPlay from '@src/assets/images/play.svg';

const MovieDetails: React.FC = ({}) => {
  const {params} = useRoute() as any;

  const {getFilmDetails, movieDetails, getFilmTrailers} = useCinemas();

  useEffect(() => {
    getFilmDetails(params.item.film_id);
  }, []);

  return (
    <ImageBackground
      source={{uri: movieDetails?.images.poster['1']?.medium?.film_image}}
      style={styles.container}>
      <Header arrowColor={COLORS.WHITE} buttonStyle={styles.backButtonStyle} />
      <LinearGradient
        style={{flex: 0.55, paddingTop: 30}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.1}}
        colors={['#00000000', '#00000000', '#001e0a33', '#1e0a33']}>
        <View style={[commonStyles.mh_24, commonStyles.mb_24]}>
          <TouchableOpacity
            onPress={() => getFilmTrailers(params.item.film_id)}
            style={{
              backgroundColor: COLORS.RED,
              ...commonStyles.center,
              height: 40,
              width: 40,
              borderRadius: 20,
              alignSelf: 'center',
            }}>
            <IcPlay />
          </TouchableOpacity>
          <Text></Text>
          <Button
            label="Book Ticket"
            style={{backgroundColor: COLORS.RED, ...commonStyles.mb_12}}
            labelStyle={{color: COLORS.WHITE}}
          />
          <Button label="Share" />
        </View>
      </LinearGradient>
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
