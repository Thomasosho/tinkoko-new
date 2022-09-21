import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    Animated,
    ImageBackground,
    View,
  } from 'react-native';

import React, { useLayoutEffect, useParams } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Articles from './Articles';
// Galio component
import { Block, Text, Button as GaButton, theme } from 'galio-framework';
// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../constants';
import { Button, Select, Icon, Input, Header, Switch } from '../components';

import Img from '../components/Img';
import { Card } from '../components';
// import BottomNavs from './bottom/BottomNavs';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

const HomeScreen = (props) => {
    const navigation = useNavigation();
    // const id = useParams();

    // /console.log(id);

    useLayoutEffect(()  => {   
        navigation.setOptions({
        headerShown: false,
        });
    }, []);

    let scrollX = new Animated.Value(0);
    let cards = [articles[5], articles[6]];

    // console.log(cards);

    return (
        <Block flex style={styles.group}>
            <Block>
                <Block style={{ marginBottom: theme.SIZES.BASE }}>
                    <Header tabs={tabs.categories} title="Categories" />
                    <Input
                        right
                        color="black"
                        style={styles.search}
                        placeholder="What are you looking for?"
                        placeholderTextColor={'#8898AA'}
                        onFocus={() => {Keyboard.dismiss(); navigation.navigate('Home')}}
                        iconContent={
                        <Icon size={16} color={theme.COLORS.MUTED} name="zoom-bold2x" family="NowExtra" />
                        }
                    />
                    
                </Block>
                
            </Block>
            
            <Articles />

            {/* <BottomNavs /> */}
        </Block>
    );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'montserrat-bold',
      paddingBottom: theme.SIZES.BASE,
      paddingHorizontal: theme.SIZES.BASE * 2,
      marginTop: 5,
      color: nowTheme.COLORS.HEADER
    },
    social: {
      width: theme.SIZES.BASE * 3.5,
      height: theme.SIZES.BASE * 3.5,
      borderRadius: theme.SIZES.BASE * 1.75,
      justifyContent: 'center'
    },
    group: {
      paddingTop: 0,
    },
    shadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.2,
      elevation: 2
    },
    button: {
      marginBottom: theme.SIZES.BASE,
      width: width - theme.SIZES.BASE * 2,
    },
    optionsButton: {
      width: 'auto',
      height: 34,
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    category: {
      backgroundColor: theme.COLORS.WHITE,
      marginVertical: theme.SIZES.BASE / 2,
      borderWidth: 0
    },
    categoryTitle: {
      height: '100%',
      paddingHorizontal: theme.SIZES.BASE,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBlock: {
      overflow: 'hidden',
      borderRadius: 4,
      marginHorizontal: 10
    },
    albumThumb: {
      borderRadius: 4,
      marginVertical: 4,
      alignSelf: 'center',
      width: thumbMeasure,
      height: thumbMeasure
    },
    productTitle: {
      color: nowTheme.COLORS.PRIMARY,
      textAlign: 'center',
      fontFamily: 'montserrat-bold',
      fontSize: 18
    },
    search: {
        height: 48,
        width: width - 32,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: nowTheme.COLORS.BORDER
    },
  });

export default HomeScreen