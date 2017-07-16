import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {compose, setPropTypes} from 'recompose'
import {currentPhaseText} from './selectors'

const propTypes = {
  className: PropTypes.string,
  phaseText: PropTypes.string
}

const mapStateToProps = (state, props) => {
  return {
    phaseText: currentPhaseText(state)
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
