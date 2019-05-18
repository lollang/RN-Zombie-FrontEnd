import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { restoreSession } from '../../Store/session/actions'

import ChatAppComponent from './ChatScreen'

class ChatAppContainer extends Component {

  render() {
    return (
      <ChatAppComponent
        restoring={this.props.restoring}
        logged={this.props.logged} />)
  }
}

const mapStateToProps = state => ({
  restoring: state.session.restoring,
  logged: state.session.user != null,
})

const mapDispatchToProps = {
  restore: restoreSession
}

ChatAppContainer.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  restore: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatAppContainer)
