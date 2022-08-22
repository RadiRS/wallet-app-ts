import React, {ReactElement, ReactNode} from 'react';

import {Dimensions, StyleSheet, View} from 'react-native';
import {colors} from '../themes/colors';

interface ContainerProps {
  children: ReactNode;
  style?: {};
}

export const Container = ({children, style}: ContainerProps): ReactElement => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
