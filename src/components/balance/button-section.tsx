import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import AppButton from '../button';
import {colors} from '../../themes/colors';

const ButtonSection: FC = () => {
  return (
    <View style={styles.background}>
      <AppButton btnStyle={styles.btn} onPress={() => {}}>
        Cancel <Icon size={17} name="card" color={colors.white} />
      </AppButton>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    width: '50%',
  },
});

export default ButtonSection;
