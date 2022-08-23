import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootStack from './src/navigators/root-stack';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <RootStack />
    </GestureHandlerRootView>
  );
};

export default App;
