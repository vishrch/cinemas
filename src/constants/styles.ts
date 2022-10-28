import {Dimensions} from 'react-native';

export enum COMPONENT_SIZE {
  DEFAULT_PADDING = 24,
  SCREEN_WIDTH = Dimensions.get('screen').width,
  SCREEN_HEIGHT = Dimensions.get('screen').height,
}

/**
 * Define colors used in app here
 */
export enum COLORS {
  WHITE = '#ffffff',
  BLACK = '#000000',
}

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;
