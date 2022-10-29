import {commonStyles} from '@src/styles/commonStyles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    ...commonStyles.fs_20,
    ...commonStyles.labelWeight700,
    ...commonStyles.ml_12,
  },
  container: {
    ...commonStyles.flexRow,
    ...commonStyles.ph_24,
    ...commonStyles.alignItemsCenter,
    ...commonStyles.mv_12,
  },
});
