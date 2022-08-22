import React, {FC} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {Container} from '../components/shared';
import AppText from '../components/text';
import {colors} from '../themes/colors';

const HomeScreen: FC = () => {
  return (
    <Container style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AppText>Home Screen</AppText>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.graylight,
  },
});

export default HomeScreen;
