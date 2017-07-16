import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

import {visibleMessages} from './selectors'

const propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const mapStateToProps = (state, props) => {
  return {
    className: props.className,
    messages: visibleMessages(state)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const messagesContainer = compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    setPropTypes(propTypes)
)

export default messagesContainer
