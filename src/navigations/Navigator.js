import React from 'react'
import { Text, View, Image, ScrollView, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {IMAGE} from '../components/Image';

import {HomeScreen} from '../screens/HomeScreen'
import {PlantLibraryScreen} from '../screens/PlantLibraryScreen'
import {FirstAidScreen} from '../screens/FirstAidScreen'
import {CommunityScreen} from '../screens/CommunityScreen'

const Tab = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#fff',
          activeBackgroundColor: '#2D2D2D',
          inactiveBackgroundColor: '#2D2D2D'
          }} 
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({color, size}) => (<Image source={IMAGE.ICON_MENU} 
            color={'#fff'} 
            resizeMode='contain' 
            style={{width: 20, height: 20}} 
            /> 
            )} 
          } 
        />
        <Tab.Screen 
          name="PlantLibrary" 
          component={PlantLibraryScreen} 
          options={{
            tabBarIcon: ({color, size}) => (<Image source={IMAGE.ICON_PL} 
            color={'#fff'} 
            resizeMode='contain' 
            style={{width: 20, height: 20}} 
            /> 
            )} 
          } 
          />
        <Tab.Screen 
          name="FirstAid" 
          component={FirstAidScreen} 
          options={{
            tabBarIcon: ({color, size}) => (<Image source={IMAGE.ICON_FA} 
            color={'#fff'} 
            resizeMode='contain' 
            style={{width: 20, height: 20}} 
            /> 
            )} 
          }   
        />
        <Tab.Screen 
          name="Community" 
          component={CommunityScreen}
          options={{
            tabBarIcon: ({color, size}) => (<Image source={IMAGE.ICON_C} 
            color={'#fff'} 
            resizeMode='contain' 
            style={{width: 20, height: 20}} 
            /> 
            )} 
          } 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createStackNavigator();
// const screenOptionStyle = {
//     headerShown: false
// }

// const HomeStackNavigator = () => {
//     return(
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen name="Home" component={BottomTabNavigator}/>
//             <Stack.Screen name="PlantLibrary" component={BottomTabNavigator}/>
//         </Stack.Navigator>
//     )
// }

export default BottomTabNavigator;