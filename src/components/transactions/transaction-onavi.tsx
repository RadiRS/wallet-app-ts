import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {TransactionAviProps} from './types';

const TransactionAvi: FC<TransactionAviProps> = ({background, icon}) => {
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <Icon size={20} name={icon} />
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
