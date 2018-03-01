import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, ScrollView, WebView, Linking, Dimensions} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class visa extends React.Component {
    static navigationOptions = {
        title: 'Visa',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text}>
                    Depending on your nationality, you may need a visa to go to Ghana.

                </Text>
                <Text style={styles.text_c}>
                    Except ECOWAS nationals and those of some countries which have specific agreements
                    with the Government of Ghana, a visa is required before entering Ghana. Please contact
                    the Ghana Diplomatic Mission or Consulate in your country for the visa application
                    procedure.    {'\n'}    {'\n'}
                    If you need an invitation letter, please send an email at contact@iceassm.org

                </Text>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },
    text_c: {
        paddingBottom:5,
        fontSize:13,
        textAlign: 'left'

    },
    text_r: {
        paddingBottom:5,
        fontSize:15,
        color:'red',
        textAlign: 'left',
    },



});

export default visa;
