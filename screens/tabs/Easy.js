import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import {practiceData} from '../practiceData';

const { width, height } = Dimensions.get("window");

const Easy = () => {
    //console.log("practiceData: ", practiceData)
    return (
        <View style={styles.container}>
            <FlatList
                data={practiceData}
                keyExtractor={data => data.id.toString()}
                renderItem={(data) => {
                    console.log("data: ", data)
                    console.log("data.item: ", data.item)
                    return(
                        <View style={styles.listItemContainerStyle}>
                            <View style={{flex: 0.75}}>
                                <View>
                                    <Text style={{color: 'gray', fontSize: 14}}>40 QUESTIONS</Text>
                                    <Text style={{marginTop: 7, fontWeight: 'bold', fontSize: 25}}>{data.item.practice}</Text>
                                </View>
                                <View style={{flexDirection: "row", marginTop: 8}}>
                                    <Feather name="x-circle" size={20} color={'#2445c7'} />
                                    <Text style={{marginLeft: 8, fontSize: 15, color: '#2445c7'}}>8 Mistakes Allowed</Text>
                                </View>
                            </View>
                            <View style={{flex:0.01}}/>
                            <View style={{flex: 0.23}}>
                                <View
                                    style={[styles.newButton, {backgroundColor: data.item.bgcolor, width: data.item.width, marginLeft: data.item.mleft}]}
                                >
                                        <Text style={{color:"#ffffff", fontSize: 16, fontWeight: "900"}}>{data.item.tag}</Text>
                                </View>

                                <LinearGradient
                                    colors={['#2445c7', '#00d3fc']}
                                    //colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                    style={{ marginLeft: -1, marginTop: 25, height: 35, width: 80, borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}
                                >
                                    <TouchableOpacity 
                                        onPress={() => {}}
                                        style={styles.buttonStart}
                                    >   
                                        <Ionicons name="play" size={15} color={"#2445c7"} />
                                        <Text style={styles.startText}>Start</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>

                    )
                }}
            />
        </View>
    )
}

export default Easy

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItemContainerStyle: {
        flex: 0.9,
        flexDirection: "row",
        justifyContent: 'center',
        width: width - 55,
        marginTop: 22,
        marginBottom: 30,
        // borderColor: 'red',
        // borderWidth: 1,
    },
    newButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        height: 28,
    },
    buttonStart: {
        flexDirection: "row",
        borderRadius: 18,
        height: 32,
        width: 77,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startText: {
        textAlign: 'center',
        color: '#2445c7',
        //padding: 15,
        width: 37
    }
})
