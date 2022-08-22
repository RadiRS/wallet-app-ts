import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {TransactionAviProps} from './types';
import AppText from '../text';
import {colors} from '../../themes/colors';

const TransactionAvi: FC<TransactionAviProps> = ({background}) => {
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <AppText color={colors.white}>X</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransactionAvi;
