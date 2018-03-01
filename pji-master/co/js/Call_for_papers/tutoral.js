import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';
import Regular_paper from "./Regular_paper";


class tutoral extends React.Component {

    static navigationOptions = {
        title: 'Tutoral',
    };

    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text_c}>The review procedure for tutorials is identical to th
                    e review procedure for papers except that they are reviewed only by Tutorial
                    Committee and are not subjected to blind review.{'\n'}
                    By submitting an abstract for a tutorial, the authors
                    accept the condition that if their tutorial is accepted for
                    ICEASSM’2017, at least one of them will attend the conference and deliver their tutorial.{'\n'}
                </Text>
                <Text style={styles.text}>
                    Tutorials submission deadline: September 30, 2016.{'\n'}
                    Tutorials acceptance notification: October 30, 2016.
                </Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
        fontSize:15,
        fontWeight: 'bold',



    },
    text_c: {
        fontSize:13,
        textAlign: 'left'

    },


});

export default tutoral;
