import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/'
import Feather from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get("window");

const Onboarding = ({navigation}) => {
    return (
        <View style={styles.container}>

            {/*banner*/}
            <View style={{}}>
                <Image 
                style={{width: width, height: height / 4}}
                    source={require('../assets/car.png')}
                />
            </View>

            {/*Maximize your chances*/}
            <View style={styles.banner1}>
                <View style={{}}>
                    <Text style={styles.text1}>Maximize your chances {"\n"} of passing the test</Text>
                </View>

                <TouchableOpacity
                    style={[styles.shadow, {marginTop: 36, width: 140, height: 140, alignItems: 'center'}]}
                >
                    <LinearGradient
                        style={{height: '30%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 25}}
                        colors={['#00d2fc', '#009efb']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={{color:"#ffffff", fontSize: 20}}>PREMIUM</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            {/*DMV Practice Test*/}
            <View>
                <View style={{}}>
                    <Text style={styles.text2}>DMV Practice Test</Text>
                </View>

                <View style={[styles.categoryContainer, {marginTop: 20}]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                        <View style={styles.categoryIcon}>
                            <Feather
                                name="trending-up"
                                size={22}
                                color={"#ffffff"}
                            />
                        </View>
                        <View style={styles.categoryText}>
                            <Text style={styles.categoryBtnTxt}>Higher chances {"\n"} of passing</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                        <View style={styles.categoryIcon}>
                            <Feather
                                name="clipboard"
                                size={22}
                                color={"#ffffff"}
                            />
                        </View>
                        <View style={styles.categoryText}>
                            <Text style={styles.categoryBtnTxt}>Exam {"\n"} Simulation</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                        <View style={styles.categoryIcon}>
                            <Feather
                                name="message-square"
                                size={22}
                                color={"#ffffff"}
                            />
                        </View>
                        <View style={styles.categoryText}>
                            <Text style={styles.categoryBtnTxt}>Hard {"\n"} Questions</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
                        <View style={styles.categoryIcon}>
                            <Image
                                source={require('../assets/no-ads.png')}
                                resizeMode="cover"
                                style={{
                                    tintColor: "#ffffff",
                                    width: 22,
                                    height: 22,
                                }}
                            />
                        </View>
                        <View style={styles.categoryText}>
                            <Text style={styles.categoryBtnTxt}>No distracting ads</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/*Trial*/}
            <View style={{marginTop:25}}>
                <View style={{}}>
                    <Text style={styles.text3}>Try 7 Days Free Premium Trial</Text>
                </View>
                <TouchableOpacity
                    style={[styles.shadow, {marginTop: 15, width: 350, height: 55, alignItems: 'center', justifyContent: 'center'}]}
                    onPress={() => navigation.navigate("Home")}
                >
                    <LinearGradient
                        style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 7}}
                        colors={['#00d2fc', '#009efb']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={{color:"#ffffff", fontSize: 20, fontWeight: "900"}}>Continue</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{margin: 15}}>
                    <Text style={{color: "#d5d5f1", textAlign: 'center'}}>$2.99 per month after FREE 7-day trial</Text>
                </View>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#053cc4',
    },
    text1: {
        color: '#ffffff', 
        fontSize: 25, 
        fontWeight: "bold", 
        textAlign: 'center'
    },
    text2: {
        color: '#ffffff', 
        fontSize: 22,
        fontWeight: "600",
        textAlign: 'center'
    },
    text3: {
        color: '#ffffff', 
        fontSize: 19,
        textAlign: 'center'
    },
    banner1: {
        flex: 1,
        alignItems: 'center', 
        marginTop: 20,
        // borderColor: 'red',
        // borderWidth: 1
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '95%',
        //alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '22%',
        //marginHorizontal: 0,
        // width: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'red',
        // borderWidth: 1
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#2442be' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryText: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    categoryBtnTxt: {
        borderWidth: 0,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 5,
        color: '#9297db',
        width: 100,
        // borderColor: 'yellow',
        // borderWidth: 1,
        fontSize: 13,
    },
})
