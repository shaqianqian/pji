import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class Date extends React.Component {
    static navigationOptions = {
        title: 'Date',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text}>
                    Extended deadlines
                </Text>
                <Text style={styles.text_c}>
                    Full paper submission: Feb. 11, 2017{'\n'}
                    Final paper acceptance: Mar. 11, 2017{'\n'}
                    Camera-ready: Mar. 26, 2017{'\n'}
                    Conference: Apr. 18 – 21, 2017
                </Text>

            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'left',
        color:'red'

    },
    text_c: {
        paddingBottom:5,
        fontSize:13,
        textAlign: 'left'

    },


});

export default Date;
