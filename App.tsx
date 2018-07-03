import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hello } from './src/Hello';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Hello
          name="Stam"
        />
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
