import {useNavigation} from '@react-navigation/core';
import {SCREENS} from '@src/constants/navigation';
import React from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './styles';

interface IMovieListItemProps {
  style?: StyleProp<ViewStyle>;
  item?: any;
  showName?: boolean;
}

const MovieListItem: React.FC<IMovieListItemProps> = ({style, showName}) => {
  const navigation = useNavigation() as any;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.MOVIE_DETAILS)}
      style={styles.container}>
      <View style={style} />
      {showName && <Text style={styles.textStyle}>Movie name: full name</Text>}
    </TouchableOpacity>
  );
};

export default MovieListItem;
