import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { CharacterList } from './src/CharacterList';
import characters from './sample-characters.json';
import { Header } from './src/Header';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CharacterList
          characters={characters}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});