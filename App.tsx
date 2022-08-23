import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import RootStack from './src/navigators/root-stack';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RootStack />
    </GestureHandlerRootView>
  );
};

export default App;
