import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import {actions} from 'store/myModel/reducers'
// import {oneSelector, twoSelector} from 'store/myModel/selectors'
import gameShape from 'shapes/game'




const propTypes = {
  items: PropTypes.array,

  view: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
  // TODO BUILD filter, sorting, pagination, authorization
}

class Many extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
        <myChild />
    )
  }
}

const mapStateToProps = (state) => {
  return {
//    oneDatum: oneSelector(state),
//    twoDatum: oneSelector(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
//    onLoadFromApi: (e) => {
//      dispatch(actions.fetchSomething())
//    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

// BUILD all of me