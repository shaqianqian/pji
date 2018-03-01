import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';

class Regular_paper extends React.Component {
    static navigationOptions = {
        title: 'Regular paper',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.text_c}>
                    The conference topics cover all major aspects of engineering and sciences including, but are not limited to:
                </Text>
                    <Text style={styles.text}>
                    Data sciences and analytics
                    </Text>
                    <Text style={styles.text_c}>
                    Engineering data analytics {'\n'}
                    Data mining, integration, visualization {'\n'}
                    Big-data analysis in complex networks
                </Text>
                <Text style={styles.text}>
                    Mathematics and computing science
                </Text>
                <Text style={styles.text_c}>
                    Probabilistic & statistical models{'\n'}
                    Combinatorics and graph theory{'\n'}
                    Physics and applied mathematics{'\n'}
                    Systems modeling and simulation{'\n'}
                    Signal and image processing{'\n'}
                    Signals and processes modeling{'\n'}
                    Operational research theory{'\n'}
                    Matrices and transformations theory
                </Text>
                <Text style={styles.text}>
                    Systems, dynamics control theories and signal processing
                </Text>
                <Text style={styles.text_c}>
                    Dynamics of mechanical structures{'\n'}
                    Automatic control of dynamic systems{'\n'}
                    Robotics, remote control and monitoring (drones){'\n'}
                    Systems modeling and identification{'\n'}
                    Systems faults detection and isolation
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

export default Regular_paper;
