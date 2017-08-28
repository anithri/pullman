import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

import {boardShape} from 'store/board/shape'

const boardPropTypes = {
  className: PropTypes.string,
  ...boardShape,
}

const mapStateToProps = (state, props) => {
  const boardState = state.board
  return {
    className: props.className,
    ...boardState,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const boardContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setPropTypes(boardPropTypes)
)

export default boardContainer
