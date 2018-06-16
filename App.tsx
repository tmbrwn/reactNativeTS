import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Open up App.ts to start working on your app!</Text>
        <Text style={styles.paragraph}>Changes you make will automatically reload.</Text>
        <Text style={styles.paragraph}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    color: 'yellow',
    fontSize: 18
  },
  paragraph: {
    color: 'green',
    fontSize: 14
  }
});
