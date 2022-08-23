import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {AmountProps} from './types';
import AppText from '../text';
import {colors} from '../../themes/colors';

const AmountSection: FC<AmountProps> = ({balance}) => {
  return (
    <View style={[styles.background, styles.mb]}>
      <AppText color={colors.secondary} size="sm">
        Total Balance
      </AppText>
      <AppText color={colors.secondary}>{`$ ${balance}`}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    paddingTop: 5,
    alignItems: 'center',
  },
  mb: {
    marginBottom: 15,
  },
});

export default AmountSection;
