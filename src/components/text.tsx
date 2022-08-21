import React, {FC, ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {colors} from '../themes/colors';

interface TextProps {
  children?: ReactNode;
  size?: String;
  style?: StyleProp<TextStyle>;
}

const AppText: FC<TextProps> = ({children, size, style}: TextProps) => {
  const extSizeStyle =
    size === 'sm'
      ? styles.smallText
      : size === 'bg'
      ? styles.bigText
      : styles.regularText;

  return <Text style={[extSizeStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: 'SourceSansPro-Regular',
  },
  regularText: {
    fontSize: 15,
    color: colors.gray,
    fontFamily: 'SourceSansPro-Bold',
  },
  bigText: {
    fontSize: 37,
    color: colors.white,
    fontFamily: 'SourceSansPro-Bold',
  },
});

export default AppText;
