import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'
import {PLAYER} from './reducers'

import {playerBySeat, currentNames, currentSkins} from 'store/player/selectors'

const propTypes = {
  seat: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => {
  const player = playerBySeat(props.seat)(state)
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
  console.log('container',props)
  return {
    update: (playerId, attrs) => dispatch(PLAYER.update(playerId, attrs))
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {id} = stateProps
  const {update} = dispatchProps

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    doNameChange: (newName) => update(id, {name: newName}),
    doSkinChange: (newSkin) => update(id, {skin: newSkin}),
    doReadyChange: (newReady) => update(id, {isReady: newReady})
  }
}

const playerContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  setPropTypes(propTypes)
)

export default playerContainer
