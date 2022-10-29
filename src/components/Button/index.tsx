import {COLORS} from '@src/constants/styles';
import {commonStyles} from '@src/styles/commonStyles';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface IButtonProps {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<IButtonProps> = ({
  label,
  onPress,
  style,
  labelStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle.base, style]}>
      <Text style={[titleStyle.base, labelStyle]}>{label}</Text>
      <View />
    </TouchableOpacity>
  );
};

export default Button;

const buttonStyle = StyleSheet.create({
  base: {
    flexDirection: 'row',
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
  },
});

const titleStyle = StyleSheet.create({
  base: {
    ...commonStyles.fs_14,
    alignSelf: 'center',
  },
});
