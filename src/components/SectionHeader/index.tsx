import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../Button';

interface ISectionHeader {
  title: string;
  onViewAll?: () => void;
}

const SectionHeader: React.FC<ISectionHeader> = ({title, onViewAll}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        labelStyle={styles.viewAllText}
        label="View All"
        onPress={onViewAll}
      />
    </View>
  );
};
export default SectionHeader;

const styles = StyleSheet.create({
  title: {
    ...commonStyles.fs_18,
    ...commonStyles.labelWeight600,
  },
  container: {
    ...commonStyles.flexRow,
    ...commonStyles.justifyContentBetween,
    ...commonStyles.ph_24,
    ...commonStyles.alignItemsCenter,
  },
  viewAllText: {
    color: COLORS.LIGHT_BLUE,
  },
});
