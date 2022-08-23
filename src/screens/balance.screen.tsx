import {StatusBar, StyleSheet} from 'react-native';
import React, {FC} from 'react';

import {Container} from '../components/shared';
import {colors} from '../themes/colors';

import {RootStackParamList} from '../navigators/root-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AmountSection from '../components/balance/amount-section';
import BalanceCardSection from '../components/balance/balance-card-section';
import ButtonSection from '../components/balance/button-section';

type Props = NativeStackScreenProps<RootStackParamList, 'Balance'>;

const BalanceScreen: FC<Props> = ({route}) => {
  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
    width: '100%',
    padding: 25,
    flex: 1,
  },
});

export default BalanceScreen;
