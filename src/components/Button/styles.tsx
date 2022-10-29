import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
  },
  textStyle: {
    ...commonStyles.fs_14,
    alignSelf: 'center',
    ...commonStyles.labelWeight700,
  },
});
