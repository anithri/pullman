import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

import {gameActions} from 'store/game/reducers'

const propTypes = {
  className: PropTypes.string
}

const mapStateToProps = (state, props) => {
  return {
    className: props.className,
    ...state.game
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    changePhase: (e) => dispatch(gameActions.changePhase('Starting'))
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
