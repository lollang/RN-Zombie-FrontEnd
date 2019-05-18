import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logoutUser} from '../Store/session'
import ReactNativeSettingsPage, {
    SectionRow,
    NavigateRow,
    CheckRow,
    SwitchRow,
    SliderRow,
    PlainText
} from '../Components/Settings/'
import {SETTINGHEADER} from '../Statics'

type Props = {};

class SettingsPage extends Component<Props> {
    constructor() {
        super();
        this.state = {
            check: false,
            switch: false,
            value: 40
        }
    }

    render() {
        return (
            <ReactNativeSettingsPage>
                <SectionRow text={SETTINGHEADER}>
                    <NavigateRow
                        text='Navigate Row'
                        iconName='your-icon-name'
                        onPressCallback={null}/>
                    <SwitchRow
                        text='Switch Row'
                        iconName='your-icon-name'
                        _value={this.state.switch}
                        _onValueChange={() => {
                            this.setState({switch: !this.state.switch})
                        }}/>
                    <CheckRow
                        text='Check Row'
                        iconName='your-icon-name'
                        _color='#000'
                        _value={this.state.check}
                        _onValueChange={() => {
                            this.setState({check: !this.state.check})
                        }}/>
                    <SliderRow
                        text='Slider Row'
                        iconName='your-icon-name'
                        _color='#000'
                        _min={0}
                        _max={100}
                        _value={this.state.value}
                        _onValueChange={value => {
                            this.setState({value})
                        }}/>
                    <PlainText
                        text="Log out"
                        iconName='logout'
                    />
                </SectionRow>
            </ReactNativeSettingsPage>
        );
    }
}

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

const mapDispatchToProps = {
    logout: logoutUser
}

SettingsPage.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SettingsPage)

