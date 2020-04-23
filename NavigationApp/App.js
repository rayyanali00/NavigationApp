import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import screen2 from './Screens/screen2';
import screen1 from './Screens/screen1';
import screen3 from './Screens/screen3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab= createBottomTabNavigator();

function BottomTab(){
return(
  <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name="Home" component={App}/>
  <Tab.Screen name="About" component={screen2}/>
</Tab.Navigator>
</NavigationContainer>
)}

function HomeScreen({navigation}){
  return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to detail screen" onPress={()=>navigation.navigate('DetailScreen')} />
  </View>
)}



const stack=createStackNavigator();

function App(){
return(
    <stack.Navigator initialRouteName="HomeScreen">
      <stack.Screen name="HomeScreen" component={HomeScreen} />
      <stack.Screen name="DetailScreen" component={screen1} />
      <stack.Screen name="About" component={screen2} />
      <stack.Screen name="Contact" component={screen3} />
    </stack.Navigator>
  
)
  }

  export default BottomTab;