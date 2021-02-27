import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Landing from './src/Landing';
import Report from './src/Report';
import Confirmation from './src/Confirmation';
import Api from './src/Api';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={Landing} options={{ title: ' ' }} />
        <RootStack.Screen name="Report" component={Report} options={{ title: 'What To Report?' }} />
        <RootStack.Screen name="Confirmation" component={Confirmation} options={{ title: 'Your Report Was Sent!' }}/>
        <RootStack.Screen name="Api" component={Api} options={{ title: 'Agree To Send Report?' }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;