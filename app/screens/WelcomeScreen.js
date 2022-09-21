import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import colours from '../config/colours';

const WelcomeScreen = () => {
    
    const navigation = useNavigation();

    useLayoutEffect(()  => {
        navigation.setOptions({
        headerShown: false,
        });
    }, []);

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/img3.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require ('../assets/logo.png')}/>
                <Text style={styles.tagText}>Nigeria's Agro Market Place...</Text>
            </View>

            <View style={styles.loginButton}>
                <Text style={styles.loginText} onPress={() => navigation.navigate('Home')}>Login</Text>
            </View>

            <View style={styles.registerButton}>
                <Text style={styles.registerText}>Register</Text>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colours.primary,
    },

    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colours.white,
    },

    logo: {
        width: '60%',
        height: 100,
    },
    
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
        width: '100%',
    },

    tagText: {
        color: colours.black,
        alignSelf: 'center',
        fontWeight: 'bold',
    },

    loginText: {
        color: colours.white,
        fontSize: 30,
        textAlign: 'center',
        top: 15,
    },

    registerText: {
        color: colours.primary,
        fontSize: 30,
        textAlign: 'center',
        top: 15,
    },
});

export default WelcomeScreen