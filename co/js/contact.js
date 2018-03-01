import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class contact extends React.Component {
    static navigationOptions = {
        title: 'contact',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>


                <Text style={styles.text_c}>
                    General chair: contact@iceassm.org{'\n'}{'\n'}

                    Sponsor chair: sponsor@iceassm.org{'\n'}{'\n'}

                    Webmaster:  webmaster@iceassm.org
                </Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    text_c: {
        paddingBottom:5,
        fontSize:13,
        textAlign: 'center',

    },


});

export default contact;
