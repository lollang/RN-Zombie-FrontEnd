import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Alert, StyleSheet} from 'react-native'
import AuthTabs from '../Modules/AuthScreen'
import LoadingIndicator from '../Components/LoadingIndicator'
import translations from '../i18n'

class AuthControlPage extends Component {

    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert(translations.t('error'), this.props.error);
        }
    }

    render() {
        const {loginUser, signupUser, error, loading} = this.props;
        return (
            <View style={styles.container}>
                <AuthTabs
                    loginUser={loginUser}
                    signupUser={signupUser}
                    error={error}
                />
                {loading && <LoadingIndicator />}
            </View>)
    }
}

AuthControlPage.propTypes = {
    loginUser: PropTypes.func.isRequired,
    signupUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});


export default AuthControlPage
