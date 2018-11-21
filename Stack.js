import { createStackNavigator } from 'react-navigation'
import Screen2 from './Screen2'

const Stack = createStackNavigator({
  StackScreen1: {
    screen: Screen2,
  },
  StackScreen2: {
    screen: Screen2
  }
})

Stack.navigationOptions = () => {
  return { drawerLockMode: 'locked-closed' }
}

export default Stack