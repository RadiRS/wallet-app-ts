import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';

import {TransactionProps} from './types';
import AppText from '../text';
import {colors} from '../../themes/colors';
import TransactionAvi from './transaction-onavi';

const TransactionItem: FC<TransactionProps> = ({
  amount,
  title,
  subtitle,
  date,
  art,
}) => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <TransactionAvi background={art.background} icon={art.icon} />
        <View style={styles.ml}>
          <AppText color={colors.secondary}>{title}</AppText>
          <AppText size="sm" color={colors.graydark}>
            {subtitle}
          </AppText>
        </View>
      </View>
      <View style={styles.right}>
        <AppText color={colors.secondary} style={styles.rightText}>
          {amount}
        </AppText>
        <AppText size="sm" color={colors.graydark} style={styles.rightText}>
          {date}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center',
    flex: 2,
  },
  right: {
    flex: 1,
  },
  ml: {
    marginLeft: 10,
  },
  rightText: {
    textAlign: 'right',
  },
});

export default TransactionItem;
