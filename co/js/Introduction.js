import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView,NetInfo} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';


class Introduction extends React.Component {
    static navigationOptions = {
        title: 'Introduction',
    };

    render() {

        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>
                <Text style={styles.text}>April 18 – 21, 2017
                    Accra, Ghana</Text>
                <Text style={styles.text_c}>
                    Many organizations including the United Nations, have predicted the doubling of population in Africa by 2050,
                    with a huge proportion moving to urban cities. This demographic surge will increase tremendously the demands for
                    services that will certainly burden the infrastructures of development, including energy, communication, transportation,
                    civil engineering, industrial manufacturing, etc. Real endeavors from scientific, engineers and experts will
                    be required to address these complex challenges of development that cut across several domains and to help preventing
                    negative impacts onto this continent’s development. The problems considered in these challenges may be relatively complex.
                </Text>
                <Text style={styles.text_c}>
                    The 1st International Conference on Engineering, Applied Sciences and System Modeling (ICEASSM) will be held on 18th-21st April 2017 in Accra, the capital of Ghana, and hosted by the University of Energy and Natural Resources (UENR). The conference aims to gather researchers, engineers and practitioners working for the advancement of sciences, sustainable engineering and related applications for solving existing and emerging problems in the world and in Africa. This conference invites advanced scientific contributions that could bring a better understanding of the problems and their interactions, with original solutions.
                </Text>
                <Text style={styles.text_c}>
                    The conference offers a broad panel of themes for communication and poster papers, and for tutorials to address critical issues related to the mathematical modeling, scientific methods applied to understanding the behaviors of engineering infrastructures of development in design, development, control, monitoring, risks assessment and management. It also invites tutorials on methods of analysis, modeling and simulation.
                </Text>
                <Text style={styles.text_c}>
                    ICEASSM will provide opportunities to attendees from different countries worldwide to exchange knowledge, experiences, innovative ideas about their various practices and experiences, and hopefully also to initiate cooperative projects. Moreover, the conference offers an excellent opportunity for delegates for exploring synergies for networking and future research/grants applications and business purposes.
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


});

export default Introduction;
