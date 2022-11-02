import {useRoute} from '@react-navigation/core';
import Button from '@src/components/Button';
import Header from '@src/components/Header';
import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useCinemas} from 'src/hooks/useCinemas';
import IcPlay from '@src/assets/images/play.svg';
import {useDispatch, useSelector} from 'react-redux';
import {bookTicketAction} from 'src/store/actions';
import useToast from 'src/hooks/useToast';
import {IMovies} from 'src/store/movieReducer';
import Share from 'react-native-share';

const MovieDetails: React.FC = ({}) => {
  const {params} = useRoute() as any;
  const dispatch = useDispatch();
  const {showToast} = useToast();

  const [showTime, setShowTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const tickets = useSelector(
    (state: {MovieReducer: IMovies}) => state.MovieReducer.tickets,
  );

  const {getFilmDetails, movieDetails, getFilmTrailers} = useCinemas();

  useEffect(() => {
    getFilmDetails(params.item.film_id);
  }, []);

  const onBookTicket = () => {
    setShowTime(true);
  };
  const onConfirm = () => {
    setShowTime(false);
    console.log(tickets);
    if (tickets.length < 10) {
      showToast('success', 'Booking confirmed');
      dispatch(
        bookTicketAction({
          time: selectedTime,
          movie: params.item.film_name,
          image: movieDetails?.images.poster['1']?.medium?.film_image,
        }),
      );
    } else {
      showToast('error', 'You Reached Limit, 10 tickets allowed in a day.');
    }
  };

  const onShare = () => {
    Share.open({message: params.item.film_name, title: params.item.film_name})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <ImageBackground
      source={{uri: movieDetails?.images.poster['1']?.medium?.film_image}}
      style={[styles.container]}>
      <Header arrowColor={COLORS.WHITE} buttonStyle={styles.backButtonStyle} />
      <LinearGradient
        style={{flex: 0.55, paddingTop: 30}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.1}}
        colors={['#00000000', '#00000000', '#001e0a33', '#1e0a33']}>
        <View
          style={[commonStyles.mh_24, commonStyles.mb_24, commonStyles.mt_40]}>
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
            onPress={onBookTicket}
          />
          <Button label="Share" onPress={onShare} />
        </View>
      </LinearGradient>
      {showTime && (
        <View style={styles.timing}>
          <ScrollView>
            {params.item.showings.Standard.times.map((i: any) => (
              <TouchableOpacity
                onPress={() => setSelectedTime(`${i.start_time}-${i.end_time}`)}
                style={[commonStyles.center, commonStyles.flexRow]}>
                <View
                  style={[
                    styles.selection,
                    `${i.start_time}-${i.end_time}` === selectedTime &&
                      styles.selected,
                  ]}
                />
                <Text style={styles.timeText}>
                  {i.start_time}-{i.end_time}
                </Text>
              </TouchableOpacity>
            ))}
            <Button
              label="Confirm"
              style={{
                backgroundColor: COLORS.RED,
                ...commonStyles.mb_12,
                ...commonStyles.mh_24,
                ...commonStyles.mt_36,
              }}
              labelStyle={{color: COLORS.WHITE}}
              onPress={onConfirm}
            />
            <Button
              label="Cancel"
              style={{
                ...commonStyles.mb_12,
                ...commonStyles.mh_24,
                ...commonStyles.mt_12,
              }}
              onPress={() => setShowTime(false)}
            />
          </ScrollView>
        </View>
      )}
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
  timing: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.WHITE,
    position: 'absolute',
    paddingTop: 70,
    // ...commonStyles.center,
  },
  timeText: {
    marginVertical: 10,
    fontWeight: '600',
  },
  selection: {
    height: 15,
    width: 15,
    borderRadius: 30,
    borderWidth: 1,
    marginRight: 15,
  },
  selected: {
    backgroundColor: COLORS.LIGHT_BLUE,
  },
});
