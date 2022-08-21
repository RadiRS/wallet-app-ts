import React, {FC} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';

import {Container} from '../components/shared';
import {colors} from '../themes/colors';

import background from '../assets/background-img/welcome-bg.png';
import AppText from '../components/text';

const WelcomeScreen: FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Container style={styles.container}>
        <View style={styles.topSection}>
          <Image source={background} resizeMode="stretch" />
        </View>
        <View style={styles.bottomSection}>
          <AppText size="bg" style={styles.title}>
            Best way to track your money
          </AppText>
          <AppText size="sm" style={styles.subTitle}>
            Best payment methjod, connects your money to your firends & family.
          </AppText>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  topSection: {
    width: '100%',
    flex: 1,
    maxHeight: '55%',
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    width: '100%',
    flex: 1,
    padding: 25,
  },
  title: {
    width: '70%',
    marginBottom: 25,
  },
  subTitle: {
    width: '70%',
    marginBottom: 25,
  },
});

export default WelcomeScreen;
