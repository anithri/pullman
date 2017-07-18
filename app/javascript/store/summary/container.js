import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import {compose, setPropTypes} from 'recompose'
import {currentPhaseText} from './selectors'
import {actions as gameActions} from 'store/game/reducers'

import phaseData from 'store/phases/phaseData'

const mapStateToProps = (state, props) => {
  const phaseId = state.game.phase
  const phase = phaseData[phaseId]
  const out = {
    phaseId,
    phaseText: phase.text,
    phase
  }
  return out
}

const mapDispatchToProps = (dispatch, props) => {
  console.log(mapDispatchToProps, props)
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
