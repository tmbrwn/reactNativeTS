import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
    name: string;
}

export class Hello extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.greeting}>Hey {this.props.name}</Text>
                <Text style={styles.finePrint}>You cannot be my friend</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    greeting: {
        fontFamily: 'Helvetica',
        fontSize: 20,
    },
    finePrint: {
        fontFamily: 'Georgia',
        fontSize: 8,
    },
});
