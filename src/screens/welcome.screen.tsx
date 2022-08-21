import React, {FunctionComponent} from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';

import {Container} from '../components/shared';
import {colors} from '../themes/colors';

import background from '../assets/background-img/welcome-bg.png';

const WelcomeScreen: FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Container style={styles.container}>
        <View style={styles.topSection}>
          <Image source={background} resizeMode="stretch" />
        </View>
        <View style={styles.bottomSection} />
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
});

export default WelcomeScreen;
