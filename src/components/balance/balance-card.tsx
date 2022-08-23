import {View, StyleSheet, ImageBackground} from 'react-native';
import React, {FC} from 'react';

import {colors} from '../../themes/colors';
import background from '../../assets/background-img/welcome-bg.png';
import AppText from '../text';

import {BalanceCardProps} from './types';

const BalanceCard: FC<BalanceCardProps> = ({
  accountNo,
  balance,
}: BalanceCardProps) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.view}>
        <View style={styles.row}>
          <AppText color={colors.white}>{`******${accountNo?.slice(
            6,
            10,
          )}`}</AppText>
        </View>

        <View style={styles.row}>
          <View>
            <AppText size="sm" color={colors.graylight}>
              Total balance
            </AppText>
            <AppText color={colors.graylight}>${balance}</AppText>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '75%',
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: colors.accent,
    borderRadius: 25,
    overflow: 'hidden',
  },
  touch: {
    height: '100%',
    borderRadius: 25,
  },
  view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    flex: 1,
  },
});

export default BalanceCard;
