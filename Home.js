import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Homepage() {
    return (
        <View style={styles.container}>
            <Text> is the hompage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
