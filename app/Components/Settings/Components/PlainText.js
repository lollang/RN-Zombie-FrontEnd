// Dependencies import
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsRowStyle from '../Styles/SettingsRowStyle'

// Styles deconstructing
const {
    containerInSection,
    containerInnerSection,
    iconLeft,
    text,
    switchSt
} = SettingsRowStyle

// Class for switch rows
class PlainText extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressCallback}>
                <View style={containerInnerSection}>
                    <Icon name={this.props.iconName} size={24} style={iconLeft} />
                    <Text style={text} numberOfLines={1} ellipsizeMode={'tail'}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

// Component export
export { PlainText }
