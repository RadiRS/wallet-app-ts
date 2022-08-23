import {StyleSheet, TouchableHighlight} from 'react-native';
import React, {FC} from 'react';
import {SendMoneyProps} from './types';
import {ScreenWidth} from '../shared';
import {colors} from '../../themes/colors';
import Profile from '../header/profile';
import AppText from '../text';

const SendMoneyItem: FC<SendMoneyProps> = ({background, img, name, amount}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.secondary}
      style={[styles.container, {backgroundColor: background}]}
      onPress={() => {}}>
      <>
        <Profile img={img} imgContainerStyle={styles.imgContainerStyle} />
        <AppText size="sm" color={colors.white}>
          {name}
        </AppText>
        <AppText color={colors.white}>{amount}</AppText>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: ScreenWidth * 0.27,
    padding: 10,
    borderRadius: 15,
    justifyContent: 'space-around',
    marginRight: 10,
    marginBottom: 10,
  },
  imgContainerStyle: {
    marginBottom: 10,
  },
});

export default SendMoneyItem;
