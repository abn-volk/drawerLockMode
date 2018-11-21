import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default class Screen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
      </View>
    )
  }
}

Screen1.navigationOptions = () => {
  return { drawerLockMode: 'locked-closed' }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});