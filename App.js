/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import codePush from "react-native-code-push";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

export default class App extends Component<{}> {
  render() {

    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATEreact
  });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! hello world!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js This is Pranav's code!
        </Text>
        <Text style={styles.instructions}>
          I make my own changes.
        </Text>
        <Button
        onPress={this.onButtonPress}
        title="Update"
        color="#841584"
        />
      </View>
    );
  }
  onButtonPress(){
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATEreact
    });
  }

}



App = codePush(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
