import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {compose, setPropTypes} from 'recompose'
import {currentPhaseText} from './selectors'
import {actions as gameActions} from 'store/game/reducers'
import {allReadied} from 'store/player/selectors'

const mapStateToProps = (state, props) => {
  return {
    game: state.game,
    allPlayersReady: allReadied(state),

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    doGameQuit: () => dispatch(gameActions.quit())
  }
}

const summaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default summaryContainer
