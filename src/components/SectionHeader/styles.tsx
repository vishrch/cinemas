import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    ...commonStyles.fs_18,
    ...commonStyles.labelWeight700,
  },
  container: {
    ...commonStyles.flexRow,
    ...commonStyles.justifyContentBetween,
    ...commonStyles.ph_24,
    ...commonStyles.alignItemsCenter,
    ...commonStyles.mt_12,
  },
  viewAllText: {
    color: COLORS.LIGHT_BLUE,
    ...commonStyles.ml_8,
  },
});
