import { AppRegistry } from 'react-native';
import {App} from './App';
import codePush from "react-native-code-push";
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/core/store/store'

const rnredux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)   

AppRegistry.registerComponent('AppUpdate', () => rnredux);
