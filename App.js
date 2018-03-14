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
  FlatList,
  Button
} from 'react-native';
import {connect} from 'react-redux'
import {doSignIn} from './src/core/actions/SIgnInAction'
import ApiReducer from './src/core/reducers/ApiReducer'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };



export class App extends Component<{}> {

  constructor(props) {
    super(props);
  }


  render() {

//   codePush.sync({ 
//     updateDialog: true,
//     installMode: codePush.InstallMode.IMMEDIATEreact
// });
const{first_name, last_name} = ApiReducer
console.log(first_name)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! hello world!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          I have written this code to test update on IOS.
        </Text>
        <Text style={styles.instructions} value={this.props.first_name}>
        
      </Text>
      <Text style={styles.instructions}>
      last_name
    </Text>
        <Button
        onPress={this.onButtonPress}
        title="Update"
        color="#841584"
        />
        <Button
        onPress={this.signIn}
        title="signIn"
        color="#841584"
        />
      </View>
    );
  }

  onButtonPress = () => {
    // codePush.sync({
    //     updateDialog: true,
    //     installMode: codePush.InstallMode.IMMEDIATEreact
    // });
    console.log("test log on update press"+this.props)
  }
  
  signIn = () => {
    console.log("test signIn component")
    this.props.login()
  }
  // onButtonPress(){
  //   codePush.sync({
  //       updateDialog: true,
  //       installMode: codePush.InstallMode.IMMEDIATEreact
  //   });
  // }

}

// export const App = (props) => {
// //   codePush.sync({ 
// //     updateDialog: true,
// //     installMode: codePush.InstallMode.IMMEDIATEreact
// // });

// onButtonPress = () => {
//   // codePush.sync({
//   //     updateDialog: true,
//   //     installMode: codePush.InstallMode.IMMEDIATEreact
//   // });
//   console.log("test log on update press")
// }

// signIn = () => {
//   props.login
// }

// const{first_name, last_name} = ApiReducer

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>
//         Welcome to React Native! hello world!
//       </Text>
//       <Text style={styles.instructions}>
//         To get started, edit App.js
//       </Text>
//       <Text style={styles.instructions}>
//         I have written this code to test update on IOS.
//       </Text>
//       <Text style={styles.instructions}>
//       first_name
//     </Text>
//     <Text style={styles.instructions}>
//     last_name
//   </Text>
//       <Button
//       onPress={this.onButtonPress}
//       title="Update"
//       color="#841584"
//       />
//       <Button
//       onPress={this.signIn}
//       title="signIn"
//       color="#841584"
//       />
//     </View>
//   )
// }

// App = codePush(App);

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

function mapStateToProps(state){
  return{
    ApiReducer: state.ApiReducer
  }
}

function mapDispatchToProps(dispatch){
  return{
    login : (id,pass)=>dispatch(doSignIn(id,pass))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)