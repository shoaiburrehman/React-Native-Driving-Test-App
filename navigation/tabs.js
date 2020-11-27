import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Home from "../screens/Home";
import Exams from "../screens/Exams";
import Favorites from "../screens/Favorites";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

const tabOptions = {
    activeTintColor: '#053cc4',
    labelStyle: {
        fontSize: 12,
        paddingBottom: 6,
    },
    style: {
        height: 70,
        elevation: 0,
        backgroundColor: '#ffffff',
        paddingBottom: 6,
    },
};

const Tabs = () => (

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#053cc4"
      tabBarOptions={tabOptions}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Practice',
                tabBarColor: '#053cc4',
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="home"
                        size={26}
                        color={focused ? "#053cc4" : "grey"}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Exams"
            component={Exams}
            options={{
                tabBarLabel: 'Exams',
                tabBarColor: '#053cc4',
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="clipboard"
                        size={26}
                        color={focused ? "#053cc4" : "grey"}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
                tabBarLabel: 'Favorites',
                tabBarColor: '#053cc4',
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="bookmark"
                        size={26}
                        color={focused ? "#053cc4" : "grey"}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarColor: '#053cc4',
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name="settings"
                        size={26}
                        color={focused ? "#053cc4" : "grey"}
                    />
                ),
            }}
        />
    </Tab.Navigator>
        //             switch (route.name) {
        //                 case "Home":
        //                     return (
        //                         <Feather
        //                             name="home"
        //                             size={25}
        //                             style={{
        //                                 tintColor: tintColor,
        //                             }}
        //                         />
        //                     );
        //                 case "Exams":
        //                     return (
        //                         <Feather
        //                             name="clipboard"
        //                             size={25}
        //                             style={{
        //                                 tintColor: tintColor,
        //                             }}
        //                         />
        //                     );
        //                 case "Favorite":
        //                     return (
        //                         <Feather
        //                             name="bookmark"
        //                             size={25}
        //                             style={{
        //                                 tintColor: tintColor,
        //                             }}
        //                         />
        //                     );
        //                 case "Settings":
        //                     return (
        //                         <Feather
        //                             name="settings"
        //                             size={25}
        //                             style={{
        //                                 tintColor: tintColor,
        //                             }}
        //                         />
        //                     );
        //             }
        //         }
        //     })}
        // >
);

export default Tabs;