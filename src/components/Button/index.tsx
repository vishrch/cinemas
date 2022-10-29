import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

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
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={[styles.textStyle, labelStyle]}>{label}</Text>
      <View />
    </TouchableOpacity>
  );
};

export default Button;
