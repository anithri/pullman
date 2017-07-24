import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

const propTypes = {
  className: PropTypes.string
}

const mapStateToProps = (state, props) => {
  return {
    className: props.className
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const personaContainer = compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    setPropTypes(propTypes)
)

export default personaContainer
