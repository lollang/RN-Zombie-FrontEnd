import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, TextInput, TouchableOpacity, Text, Dimensions} from 'react-native'
import translations from '../../i18n'
import styles from './Styles'
import {SIGNUPCONTEXT} from "../../Statics";
import {PADDINGHORIZONTAL} from "../../Modules/AuthScreen/Styles";
import ButtonComponent, {CircleButton, RoundButton, RectangleButton} from 'react-native-button-component';

class BasicFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password: '',};

        this.handleEmailChange = (email) => {
            this.setState({email: email})
        }

        this.handlePasswordChange = (password) => {
            this.setState({password: password})
        }

        this.handleButtonPress = () => {
            this.props.onButtonPress(this.state.email, this.state.password)
        }
    }

    render() {
        const {width} = Dimensions.get('window');
        return (
            <View
                style={styles.container}>

                <TextInput
                    style={styles.textInput}
                    placeholder={translations.t('email')}
                    returnKeyType='next'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={this.handleEmailChange}
                    value={this.state.email}
                    underlineColorAndroid={'transparent'}/>

                <TextInput
                    style={styles.textInput}
                    placeholder={translations.t('password')}
                    secureTextEntry={true}
                    returnKeyType='done'
                    onChangeText={this.handlePasswordChange}
                    value={this.state.password}
                    underlineColorAndroid={'transparent'}/>

                <RoundButton
                    text={this.props.buttonTitle}
                    type="primary"
                    backgroundColors={['#4DC7A4', '#66D37A']}
                    gradientStart={{x: 0.5, y: 1}}
                    gradientEnd={{x: 1, y: 1}}
                    height={40}
                    width={width - PADDINGHORIZONTAL}
                    onPress={() => this.handleButtonPress()}/>
            </View>
        )
    }
}

BasicFormComponent.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    onButtonPress: PropTypes.func.isRequired,
}

export default BasicFormComponent
