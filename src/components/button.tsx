import React, {FC, ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
  TextStyle,
} from 'react-native';

import {colors} from '../themes/colors';
import AppText from './text';

interface ButtonProps {
  children?: ReactNode;
  size?: String;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const AppButton: FC<ButtonProps> = ({
  children,
  size,
  btnStyle,
  textStyle,
  onPress,
}: ButtonProps) => {
  const extSizeStyle =
    size === 'sm'
      ? styles.smallBtn
      : size === 'bg'
      ? styles.bigBtn
      : styles.regularBtn;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[extSizeStyle, btnStyle]}
      onPress={onPress}>
      <AppText style={textStyle}>{children}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  smallBtn: {},
  regularBtn: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: '100%',
    padding: 20,
    borderRadius: 20,
  },
  bigBtn: {},
});

export default AppButton;
