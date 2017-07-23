import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'
import {actions as playerActions} from './reducers'

import {playerById, currentNames, currentSkins} from 'store/player/selectors'

const propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string
}

const mapStateToProps = (state, props) => {
  const player = playerById(props.id)(state)
  const otherNames = currentNames(state).filter(n => n !== player.name)
  const otherSkins = currentSkins(state).filter(s => s !== player.skin)
  return {
    ...player,
    otherNames,
    otherSkins,
    className: props.className,
    isNameValid: (name) => otherNames.indexOf(name) < 0
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    doNameChange: (newName) => dispatch(playerActions.changePlayerName(props.id, newName)),
    doSkinChange: (newSkin) => dispatch(playerActions.changePlayerSkin(props.id, newSkin))
  }
}

const playerContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setPropTypes(propTypes)
)

export default playerContainer

