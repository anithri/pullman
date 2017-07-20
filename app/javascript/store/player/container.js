import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

import {playerById} from 'store/player/selectors'

const propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string
}

const mapStateToProps = (state, props) => {
  const player = playerById(props.id)(state)
  return {
    ...player,
    className: props.className
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const playerContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setPropTypes(propTypes)
)

export default playerContainer
