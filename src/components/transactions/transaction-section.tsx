import {View, StyleSheet, FlatList} from 'react-native';
import React, {FC} from 'react';
import AppText from '../text';
import {colors} from '../../themes/colors';
import {TransactionSectionProps} from './types';
import TransactionItem from './transaction-item';

const TransactionSection: FC<TransactionSectionProps> = ({data}) => {
  return (
    <View style={styles.background}>
      <View style={styles.row}>
        <AppText color={colors.secondary}>Transaction</AppText>
        <AppText size="sm" color={colors.secondary}>
          Recent
        </AppText>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        style={styles.listContainer}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    paddingHorizontal: 25,
    paddingTop: 5,
    flex: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  listContainer: {
    width: '100%',
  },
  listContentContainer: {
    paddingBottom: 25,
  },
});

export default TransactionSection;
