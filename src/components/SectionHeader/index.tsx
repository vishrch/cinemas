import React from 'react';
import {Text, View} from 'react-native';
import Button from '../Button';
import {styles} from './styles';
import IcFilter from '@src/assets/images/filter.svg';
import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';

interface ISectionHeader {
  title: string;
  onViewAll?: () => void;
  showFilter?: boolean;
  onFilter?: () => void;
  rtl?: boolean;
}

const SectionHeader: React.FC<ISectionHeader> = ({
  title,
  onViewAll,
  showFilter,
  onFilter = () => {},
  rtl,
}) => {
  return (
    <View style={[styles.container, rtl && styles.rtl]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[commonStyles.flexRow, commonStyles.center]}>
        {showFilter && (
          <IcFilter color={COLORS.LIGHT_BLUE} onPress={() => onFilter()} />
        )}
        <Button
          labelStyle={styles.viewAllText}
          label="View All"
          onPress={onViewAll}
        />
      </View>
    </View>
  );
};
export default SectionHeader;
