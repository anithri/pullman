import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import {compose, setPropTypes} from 'recompose'
import {currentPhaseText} from './selectors'
import {actions as gameActions} from 'store/game/reducers'

const mapStateToProps = (state, props) => {
  const out = {
  }
  return out
}

const mapDispatchToProps = (dispatch, props) => {
  const boundActions = bindActionCreators(gameActions, dispatch)
  return {
    ...boundActions
  }
}

const summaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default summaryContainer
