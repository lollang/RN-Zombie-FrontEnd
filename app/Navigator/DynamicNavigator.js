/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChatPage from '../Pages/ChatPage';
import RecordsPage from '../Pages/RecordsPage';
import RoomsPage from '../Pages/RoomsPage';
import DescriptionPage from '../Pages/DescriptionPage';
import SettingsPage from '../Pages/SettingsPage';

type Props = {};
export default class DynamicNavigator extends Component<Props> {
    render() {
        const MyDrawerNavigator = createAppContainer(createDrawerNavigator({
            RoomsPage: {
                screen: RoomsPage,
                navigationOptions: {
                    tabBarLabel: 'Rooms',
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialIcons
                            name={'whatshot'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            ChatPage: {
                screen: ChatPage,
                navigationOptions: {
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialIcons
                            name={'whatshot'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            RecordsPage: {
                screen: RecordsPage,
                navigationOptions: {
                    tabBarLabel: 'Records',
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialIcons
                            name={'whatshot'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            DescriptionPage: {
                screen: DescriptionPage,
                navigationOptions: {
                    tabBarLabel: 'Description',
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialIcons
                            name={'whatshot'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
            SettingsPage: {
                screen: SettingsPage,
                navigationOptions: {
                    tabBarLabel: 'Description',
                    tabBarIcon: ({tintColor, focused}) => (
                        <MaterialIcons
                            name={'whatshot'}
                            size={26}
                            style={{color: tintColor}}
                        />
                    )
                }
            },
        }));

        return <MyDrawerNavigator />
    }
}
