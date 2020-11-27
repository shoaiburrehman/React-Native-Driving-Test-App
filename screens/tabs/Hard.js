import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Hard = () => {
    return (
        <View style={styles.container}>
            <Text>Hard Screen</Text>
        </View>
    )
}

export default Hard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
