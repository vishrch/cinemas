import Header from '@src/components/Header';
import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const MovieDetails: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Header arrowColor={COLORS.WHITE} buttonStyle={styles.backButtonStyle} />
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 50,
  },
  backButtonStyle: {
    backgroundColor: COLORS.BLACK,
    padding: 5,
    borderRadius: 3,
    opacity: 0.15,
  },
});
