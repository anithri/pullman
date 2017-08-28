import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'
import {allRegions} from './selectors'

import {regionShape} from 'store/board/shape'

const propTypes = {
  className: PropTypes.string,
  ...regionShape
}

const mapStateToProps = (state, props) => {
  const region = allRegions(state)[props.name]
  return {
    className: props.className,
    ...region
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...dispatchProps,
    ...stateProps,
    ...ownProps
  }
}

const boardContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  setPropTypes(propTypes)
)

export default boardContainer
