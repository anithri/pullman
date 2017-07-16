import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

const propTypes = {
  className: PropTypes.string
}

const mapStateToProps = (state, props) => {
  return {
    phaseText: state.summary.phaseText
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const summaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default summaryContainer
