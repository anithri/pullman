import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'
import {actions as gameActions} from 'store/game/reducers'
import {allReadied} from 'store/player/selectors'

const propTypes = {
  className: PropTypes.string,
}

const mapStateToProps = (state, props) => {
  return {
    className: props.className,
    ...state.game,
    allPlayersReady: allReadied(state),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    startGame: () => {
      dispatch(gameActions.start())
    }
  }
}

const gameContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setPropTypes(propTypes)
)

export default gameContainer
