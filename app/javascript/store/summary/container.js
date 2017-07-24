import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {compose, setPropTypes} from 'recompose'
import {currentPhaseText} from './selectors'
import {actions as gameActions} from 'store/game/reducers'

const mapStateToProps = (state, props) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}

const summaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default summaryContainer
