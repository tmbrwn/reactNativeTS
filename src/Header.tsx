import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Header: React.SFC = () => (
  <View style={styles.container}>
    <Text style={styles.content}>Characters</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    borderColor: '#d0d0d0',
    borderBottomWidth: 1,
  },
  content: {
    marginTop: 30,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
