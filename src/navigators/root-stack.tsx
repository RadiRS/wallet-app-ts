import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from '../screens/welcome.screen';
import HomeScreen from '../screens/home.screen';
import BalanceScreen from '../screens/balance.screen';

import Greating from '../components/header/greating';
import Profile from '../components/header/profile';
import {CardProps} from '../components/cards/card-section';

import avatar from '../assets/background-img/avatar.png';
import {colors} from '../themes/colors';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
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
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={BalanceScreen}
          options={({route, navigation}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerLeft: props => (
              <Icon
                {...props}
                name="chevron-back"
                size={25}
                colors={colors.secondary}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
