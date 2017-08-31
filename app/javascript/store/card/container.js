import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, setPropTypes} from 'recompose'

import {cardsById }from './selectors'
import cardShape from './shape'

const propTypes = {
  className: PropTypes.string,
  ...cardShape
}

const mapStateToProps = (state, props) => {
  const myCard = cardsById(state)[props.cardId]
  return {
    ...myCard
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}


const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...dispatchProps,
    ...stateProps,
    ...ownProps
  }
}

const cardContainer = compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
      mergeProps
    ),
    setPropTypes(propTypes)
)

export default cardContainer
