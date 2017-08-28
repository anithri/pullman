import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

import <%= camelEntityName %>Shape from './shape'

const propTypes = {
  className: PropTypes.string,
  ...<%= camelEntityName %>Shape
}

const mapStateToProps = (state, props) => {
  // const <%= camelEntityName %>State = state.<%= camelEntityName %>

  return {
    //...<%= camelEntityName %>State
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

const <%= camelEntityName %>Container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  setPropTypes(propTypes)
)

export default <%= camelEntityName %>Container
