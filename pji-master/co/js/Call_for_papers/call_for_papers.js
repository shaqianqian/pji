import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View ,Button,ScrollView} from 'react-native';
//import App from './App';
import {
    StackNavigator,
} from 'react-navigation';

// import Regular_paper from './Regular_paper';
// import tutoral from './tutoral';
class call_for_papers extends React.Component {
    static navigationOptions = {
        title: 'Call for papers',
    };

    render() {
        navigation=this.props.navigation;
        return (
            <ScrollView style={{margin:16,borderColor:'black', flex: 1, flexDirection: 'column'}}>

                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('Regular_paper')

                      } >Regulaer papers

                </Text>

                <Text style={styles.bt}

                      onPress={() =>
                          navigation.navigate('tutoral')
                      } >Tutoral
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
// const App = StackNavigator({
//     tutoral:  {screen:tutoral},
//     Introduction1:  {screen:Regular_paper},
// });


export default call_for_papers;
