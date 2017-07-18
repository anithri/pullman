import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'
import phaseData, {phaseDataShape} from './phaseData'

const propTypes = {
  className: PropTypes.string,
  ...phaseDataShape
}

const mapStateToProps = (state, props) => {
  console.log('phaseContainer',props, state, phaseData)
  return {
    ...props,
    ...phaseData[props.id]
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const phaseContainer = compose(
    connect(
      mapStateToProps,
      mapDispatchToProps
    ),
    setPropTypes(propTypes)
)

export default phaseContainer
