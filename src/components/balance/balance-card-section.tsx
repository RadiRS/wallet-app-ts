import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import {BalanceCardProps} from './types';
import BalanceCard from './balance-card';

const BalanceCardSection: FC<BalanceCardProps> = props => {
  return (
    <View style={styles.background}>
      <BalanceCard {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    alignItems: 'center',
    flex: 2,
  },
});

export default BalanceCardSection;
