import {View, StyleProp, TextStyle, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import AppText from '../text';
import {colors} from '../../themes/colors';

interface GreatingProps {
  mainText: string;
  subText: string;
  mainTextStyle?: StyleProp<TextStyle>;
  subTextStyle?: StyleProp<TextStyle>;
}

const Greating: FC<GreatingProps> = ({
  mainText,
  subText,
  mainTextStyle,
  subTextStyle,
}: GreatingProps) => {
  return (
    <View style={styles.container}>
      <AppText style={[styles.mainText, mainTextStyle]}>{mainText}</AppText>
      <AppText style={[styles.subText, subTextStyle]}>{subText}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  mainText: {
    color: colors.secondary,
    fontSize: 22,
  },
  subText: {
    color: colors.graydark,
  },
});

export default Greating;
