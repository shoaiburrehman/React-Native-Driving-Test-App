import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Exams = () => {
    return (
        <View style={styles.container}>
            <Text>Exams Screen</Text>
        </View>
    )
}

export default Exams

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
