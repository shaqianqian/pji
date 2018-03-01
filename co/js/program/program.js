import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class program extends React.Component {
    static navigationOptions = {
        title: 'Program',
    };


    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>


                <Text style={styles.text_c}>
                    The ICEASSM’2017 program will include pleanry keynote sessions, tutorials and regular paper presentat
                    ions. In addition, some social even ts will be added to discover the Ghanaian culture and allow participants
                    to exchange during convivial moments.
                </Text>
                <Text style={styles.text_c}>
                    The programm is available

                </Text>
                <Text style={styles.text_r}

                          onPress={() =>
                          navigation.navigate('pdf')


                      } >here
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
        color:'#0066cc'

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

export default program;
