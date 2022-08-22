import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';

import {CardProps} from './card-section';
import {ScreenWidth} from '../shared';
import {colors} from '../../themes/colors';
import background from '../../assets/background-img/welcome-bg.png';
import AppText from '../text';

const CardItem: FC<CardProps> = ({accountNo, id, balance}: CardProps) => {
  const onPress = () => id;

  return (
    <ImageBackground source={background} style={styles.background}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.touch}
        activeOpacity={0.9}>
        <View style={styles.view}>
          <View style={styles.row}>
            <AppText color={colors.white}>{`******${accountNo.slice(
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
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '75%',
    width: ScreenWidth * 0.67,
    resizeMode: 'cover',
    backgroundColor: colors.accent,
    borderRadius: 25,
    marginRight: 25,
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

export default CardItem;
