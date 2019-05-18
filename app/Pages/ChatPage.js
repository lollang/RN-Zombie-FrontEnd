/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../Navigator/NavigationUtil';
import ChatContainer from '../Modules/ChatApp/';

type Props = {};
export default class ChatPage extends Component<Props> {
    render() {
        return <ChatContainer />;
    }
}
