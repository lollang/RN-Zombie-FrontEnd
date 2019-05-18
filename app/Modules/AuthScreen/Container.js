import React, {Component} from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import ButtonComponent, {CircleButton, RoundButton, RectangleButton} from 'react-native-button-component';
import translations from "../../i18n"
import BasicForm from '../../Components/BasicLoginForm'
import SafeAreaViewPlus from '../../Components/SafeArea'
import {VERSION_NUMBER, SIGNUPCONTEXT, LOGINCONTEXT} from '../../Statics';
import styles, {PADDINGHORIZONTAL} from './Styles';

export default class AuthTabs extends Component {

    constructor() {
        super();
        this.state = {
            displayForms: false,
            displayLogin: true
        }
    }

    composeLoginForm() {
        return (
            <BasicForm
                buttonTitle={translations.t('login')}
                onButtonPress={this.props.loginUser}/>
        )
    }

    composeSignUpForm() {
        return (
            <BasicForm
                buttonTitle={translations.t('signup')}
                onButtonPress={this.props.signupUser}/>
        )
    }

    composeLoginControl() {
        const {width} = Dimensions.get('window')
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <RoundButton
                        text={LOGINCONTEXT}
                        type="primary"
                        backgroundColors={['#4DC7A4', '#66D37A']}
                        gradientStart={{x: 0.5, y: 1}}
                        gradientEnd={{x: 1, y: 1}}
                        height={80}
                        width={width - PADDINGHORIZONTAL}
                        onPress={() => this.setDisplayForms({isSignUp: false})}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <RoundButton
                        text={SIGNUPCONTEXT}
                        type="primary"
                        backgroundColors={['#4DC7A4', '#66D37A']}
                        gradientStart={{x: 0.5, y: 1}}
                        gradientEnd={{x: 1, y: 1}}
                        height={80}
                        width={width - PADDINGHORIZONTAL}
                        onPress={() => this.setDisplayForms({isSignUp: true})}
                    />
                </View>
            </View>
        )
    }

    getLoginOrSignupForm() {
        const {displayLogin} = this.state;
        if (displayLogin) {
            return this.composeLoginForm();
        } else {
            return this.composeSignUpForm();
        }
    }

    setDisplayForms({isSignUp}) {
        const nextState = {
            displayForms: true,
            displayLogin: !isSignUp
        }
        this.setState(nextState);
    }

    render() {
        const {displayForms} = this.state;
        return (
            <View>
                {
                    displayForms ? this.getLoginOrSignupForm() : this.composeLoginControl()

                }
                <Text>Version: {VERSION_NUMBER}</Text>
            </View>
        )
    }
}
