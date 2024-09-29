import React from 'react';
import { TouchableOpacity, Text, ViewStyle, StyleProp } from 'react-native';import { buttonStyles } from '@/styles/baubles/TKButton';

type TKButtonProps = {
    title: string;
    color?: 'warning' | 'danger' | 'success';
    onPress?: () => void;
    style?: StyleProp<ViewStyle> // allows single or array of styles
  };

  const TKButton: React.FC<TKButtonProps> = ({ title = 'Press Me', color, onPress, style }) => {
    const buttonStyle = buttonStyles['button']
    const colorStyle = color ? buttonStyles[color] : {};

    return (
      <TouchableOpacity onPress={onPress} style={[buttonStyle, colorStyle, style]}>
        <Text style={buttonStyles['buttonText']}>{title}</Text>
      </TouchableOpacity>
    );
  };

export default TKButton;