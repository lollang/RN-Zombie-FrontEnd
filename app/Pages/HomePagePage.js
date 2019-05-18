import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash';
import {StyleSheet, Text, View, ScrollView, ActivityIndicator} from 'react-native';
import DynamicTabNavigator from '../Navigator/DynamicNavigator';
import SafeAreaViewPlus from '../Components/SafeArea';
import { restoreSession, loginUser, signupUser } from '../Store/session/actions';
import LoginControlPages from './AuthControlPage';

type Props = {};
class HomePagePage extends Component<Props> {

    componentDidMount() {
        this.props.restoreSession()
    }

    render() {
        if (this.props.restoring) {
            return <ActivityIndicator />
        } else {
            if (this.props.logged) {
                return (
                    <SafeAreaViewPlus>
                        <DynamicTabNavigator/>
                    </SafeAreaViewPlus>
                )
            } else {
                return <LoginControlPages
                    loginUser={this.props.loginUser}
                    signupUser={this.props.signupUser}
                    loading={this.props.loading}
                />
            }
        }
    }
}

HomePagePage.propTypes = {
    restoring: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
    restoreSession: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    signupUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    nav: state.nav,
    restoring: state.session.restoring,
    loading: state.session.loading,
    logged: state.session.user != null,
});

const mapDispatchToProps = {
    restoreSession: restoreSession,
    loginUser: loginUser,
    signupUser: signupUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePagePage);

