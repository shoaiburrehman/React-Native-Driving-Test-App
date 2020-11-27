import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Easy from './tabs/Easy';
import Medium from './tabs/Medium';
import Hard from './tabs/Hard';

const MaterialTopTab = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <MaterialTopTab.Navigator
            tabBarOptions={{
                activeTintColor: "#333333",
                labelStyle: { fontSize: 14, fontWeight: 'bold' },
                tabStyle: { width: 90, elevation: 0 },
                indicatorStyle: { marginLeft:26, marginBottom: 8, width: 35, borderColor: '#053cc4', borderWidth: 1, elevation: 0},
                style: { elevation: 0 } //remove the border shadow line
            }}
        >
            <MaterialTopTab.Screen
                name="Easy"
                component={Easy}
                options={{ title: 'Easy' }}
            />
            <MaterialTopTab.Screen name="Medium" component={Medium} />
            <MaterialTopTab.Screen name="Hard" component={Hard} />
        </MaterialTopTab.Navigator>
        // <View style={styles.container}>
        //     <Text>Home Screen</Text>
        // </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
