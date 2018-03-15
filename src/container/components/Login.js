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
import ApiReducer from './src/core/reducers/ApiReducer';


class Login extends Component{


    render(){
        return(
        <View>
            <Input defaultValue="user id"/>
            <Input defaultValue="password"/>
            <Button
            onPress={this.signIn}
            title="signIn"
            color="#841584"
            />
        </View>
        )
    }

    signIn = (id,pass)=>{

    }
}