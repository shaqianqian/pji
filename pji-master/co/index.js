import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,Image, ScrollView,ImageBackground,Dimensions} from 'react-native';
//import App from './App';
import Introduction from './js/Introduction';
import call_for_papers from './js/Call_for_papers/call_for_papers';
import Regular_paper from './js/Call_for_papers/Regular_paper';
import tutoral from './js/Call_for_papers/tutoral';
import Date from './js/Date'
import Committees from './js/Committees'
import program from './js/program/program'
import pdf from './js/program/pdf'
import submission from './js/Submission/Submission'
import guide_for_author from './js/Submission/guide_for_author'
import submit from './js/Submission/submit'
import txt from './js/Submission/txt'
import registration from './js/registration'
import local from './js/local/local'
import about_acca from './js/local/about_acca'
import Acco from './js/local/Acco'
import venue from './js/local/venue'
import visa from './js/local/visa'
import contact from './js/contact'
import sponsor from './js/sponsor/sponsor'
import support from './js/sponsor/support'
const filePath = './res/img/a.txt'
import {
    StackNavigator,
} from 'react-navigation';

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'ICEASSM2017',
    };

    render() {
        navigation=this.props.navigation;
        return (


           // <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <ImageBackground  style={{height:Dimensions.get('window').height,weight:Dimensions.get('window').width}} source={require('./res/img/background.png')}>
            <Text style={styles.bt}

                     onPress={() =>
                    navigation.navigate('Introduction')

                     } >Introduction


            </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('Call_for_papers')
                      } >Call for papers
                </Text>

                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('Date')
                      } >Dates
                </Text>

                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('Committees')
                      } >Committees
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('Program')
                      } >Program
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('submission')
                      } >Subssiom
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('registration')
                      } >Registration
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('local')
                      } >Local Information
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('sponsor')
                      } >Sponsors
                </Text>
                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('contact')
                      } >Contact
                </Text>
                </ImageBackground>
        //    </ScrollView>

        );
    }
}

const App = StackNavigator({
    Main: {screen: MainScreen},
    Introduction:{screen:Introduction},
    Call_for_papers:{screen:call_for_papers},
    Regular_paper:{screen:Regular_paper},
    tutoral:{screen:tutoral},
    Date:{screen:Date},
    Committees:{screen:Committees},
    Program:{screen:program},
    pdf:{screen:pdf},
    submission:{screen:submission},
    guide_for_author:{screen:guide_for_author},
    submit:{screen:submit},
    txt:{screen:txt},
    registration:{screen: registration},
    local:{screen:local},
    about_acca:{screen:about_acca},
    Acco:{screen:Acco},
    venue:{screen:venue},
    visa:{screen:visa},
    contact:{screen:contact},
    sponsor:{screen:sponsor},
    support:{screen:support}
});

const styles = StyleSheet.create({
    bt: {
        backgroundColor:'#6699cc',
        alignItems: 'center',
        textAlign:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#495A80',
        borderRadius: 5,
        margin: 5,
        padding: 10
    } ,


});

AppRegistry.registerComponent('co', () => App);
