import React, {FC} from 'react';

// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcome.screen';
import HomeScreen from '../screens/home.screen';
import {colors} from '../themes/colors';
import Greating from '../components/header/greating';
import Profile from '../components/header/profile';

import avatar from '../assets/background-img/avatar.png';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: colors.graylight},
          headerShadowVisible: false,
          headerTintColor: colors.secondary,
          headerRight: () => (
            <Profile
              img={avatar}
              imgContainerStyle={{backgroundColor: colors.tertiary}}
            />
          ),
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => (
              <Greating
                mainText="Hey Rani!"
                subText="Welcome back"
                {...props}
              />
            ),
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
