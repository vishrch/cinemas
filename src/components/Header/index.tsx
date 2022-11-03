import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import IcArrow from '@src/assets/images/arrow.svg';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';

interface IHeader {
  title?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  arrowColor?: COLORS;
  rtl?: boolean;
}

const Header: React.FC<IHeader> = ({
  title,
  buttonStyle,
  arrowColor = COLORS.BLACK,
  rtl,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, rtl && styles.rtl]}>
      <TouchableOpacity style={buttonStyle} onPress={() => navigation.goBack()}>
        <IcArrow color={arrowColor} style={!rtl && commonStyles.rotate_180} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default Header;
