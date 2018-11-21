import React from 'react'
import { createAppContainer, createDrawerNavigator } from 'react-navigation'

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Stack from './Stack'

export default class App extends React.Component {

  render() {
    return <Navigator />
  }
}

const Navigator = createAppContainer(
  createDrawerNavigator(
    {
      Home: {
        screen: Screen1,
      },
      MyScreen: {
        screen: Screen2,
        navigationOptions: {
          drawerLockMode: 'locked-closed'
        }
      },
      Stack: {
        screen: Stack,
      },
    },
    {
      initialRouteName: 'Home',
      backBehavior: 'initialRoute',
    }
  )
)
