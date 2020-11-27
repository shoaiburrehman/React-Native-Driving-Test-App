import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Medium = () => {
    return (
        <View style={styles.container}>
            <Text>Medium Screen</Text>
        </View>
    )
}

export default Medium

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
