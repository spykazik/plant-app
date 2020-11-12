import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigations/Navigator'

const App = () => {
  return(
    <BottomTabNavigator/>
  )
}
export default App;

// export async function loadApplication() {
//   await Font.loadAsync({
//     'ssp-regualr': require('./fonts/SourceSansPro-Regular.ttf'),
//     'ssp-bold': require('./fonts/SourceSansPro-Bold.ttf'),
//     'ssp-sb': require('./fonts/SourceSansPro-SemiBold.ttf')
//   })
// }