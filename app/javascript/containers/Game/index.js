import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {actions} from 'store/games/reducers'
import {gameCount, gameList} from 'store/games/selectors'
import {withProps} from 'recompose'
import OrigTable from 'components/Table'

const Table = withProps({
  headers: ['Name', 'Mechanics', 'Description', 'Actions'],
  keys: ['name', 'mechanics', 'description']
})(OrigTable)


const propTypes = {
  className: PropTypes.string,
  gameCount: PropTypes.number,
  children: PropTypes.array,
  gameList: PropTypes.arrayOf(PropTypes.object)
}

class Game extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const actions = {


    }
    return (
      <Table items={this.props.gameList}
             actions={this.props.actions} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameCount: gameCount(state),
    gameList: gameList(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFromApi: (e) => {
      dispatch(actions.fetchGames())
    },
    onShow: (e) => {
      dispatch(actions.showGame())
    },
    onEdit: (e) => {
      dispatch(actions.editGame())
    },
    onDelete: (e) => {
      dispatch(actions.deleteGame())
    }
    // onChangeConfig: (e) => { dispatch(actions.changeConfig(e)) },
    // onChangeSeason: (e) => { dispatch(actions.changeSeason(e)) },
    // onChangePedPoint: (e) => { dispatch(actions.changePedPoint(e)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)

