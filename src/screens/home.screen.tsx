import React, {FC} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import CardSection, {CardProps} from '../components/cards/card-section';
import SendMoneySection from '../components/send-money/send-money-section';
import {SendMoneyProps} from '../components/send-money/types';

import {Container} from '../components/shared';
import TransactionSection from '../components/transactions/transaction-section';
import {TransactionProps} from '../components/transactions/types';
import {colors} from '../themes/colors';
import avatar from '../assets/background-img/avatar.png';

import {RootStackParamList} from '../navigators/root-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: FC<Props> = () => {
  const cardsData: Array<CardProps> = [
    {
      id: 1,
      accountNo: '34242352323',
      balance: 20000.31,
      alias: 'Work Debit',
    },
    {id: 2, accountNo: '14242352323', balance: 50000.11, alias: 'Play Debit'},
    {id: 3, accountNo: '24242352323', balance: 10000.21, alias: 'Invest Debit'},
    {id: 4, accountNo: '54242352323', balance: 60000.11, alias: 'Daily Debit'},
    {
      id: 5,
      accountNo: '64242352323',
      balance: 90000.21,
      alias: 'Free Debit',
    },
  ];

  const transactionData: Array<TransactionProps> = [
    {
      id: 1,
      amount: '-$93.00',
      date: '14 Ags 2022',
      title: 'Pulsa',
      subtitle: 'Paket',
      art: {
        background: colors.primary,
        icon: 'phone-portrait-outline',
      },
    },
    {
      id: 2,
      amount: '-$13.00',
      date: '14 Ags 2022',
      title: 'Car',
      subtitle: 'Gojek',
      art: {
        background: colors.accent,
        icon: 'car-outline',
      },
    },
    {
      id: 3,
      amount: '-$14.00',
      date: '13 Ags 2022',
      title: 'Car',
      subtitle: 'Grab',
      art: {
        background: colors.tertiary,
        icon: 'car',
      },
    },
  ];

  const sendMoneyData: Array<SendMoneyProps> = [
    {
      id: 1,
      amount: '22323.4',
      name: 'Abdul Badar',
      background: colors.tertiary,
      img: avatar,
    },
    {
      id: 2,
      amount: '3445.33',
      name: 'Firman Safir',
      background: colors.primary,
      img: avatar,
    },
    {
      id: 3,
      amount: '9884.2',
      name: 'Rahmat Salam',
      background: colors.accent,
      img: avatar,
    },
  ];

  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.graylight} />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
  },
});

export default HomeScreen;
