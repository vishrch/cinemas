import {useNavigation} from '@react-navigation/core';
import {SCREENS} from '@src/constants/navigation';
import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

interface IMovieListItemProps {
  style?: StyleProp<ImageStyle>;
  item?: any;
  showName?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const MovieListItem: React.FC<IMovieListItemProps> = ({
  style,
  showName,
  item,
  containerStyle,
}) => {
  const navigation = useNavigation() as any;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.MOVIE_DETAILS, {item})}
      style={[styles.container, containerStyle]}>
      <Image
        source={{uri: item.images.poster['1'].medium.film_image}}
        style={[style, {width: '100%'}]}
      />
      {showName && <Text style={styles.textStyle}>{item.film_name}</Text>}
    </TouchableOpacity>
  );
};

export default MovieListItem;
