import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {actions} from 'store/games/reducers'

const propTypes = {}

class Create extends React.Component {
  render () {
    return (
      <div>
        <h3>containers # Game # Components # Create</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // gameCount: gameCount(state),
    // gameList: gameList(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // onLoadFromApi: (e) => {
    //   dispatch(actions.fetchGames())
    // },
    // onShow: (e) => {
    //   dispatch(actions.showGame())
    // },
    // onEdit: (e) => {
    //   dispatch(actions.editGame())
    // },
    // onDelete: (e) => {
    //   dispatch(actions.deleteGame())
    // }
    // onChangeConfig: (e) => { dispatch(actions.changeConfig(e)) },
    // onChangeSeason: (e) => { dispatch(actions.changeSeason(e)) },
    // onChangePedPoint: (e) => { dispatch(actions.changePedPoint(e)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)

