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
    this.state = {
      view: 'index'
    }
  }

  componentDidMount () {
    this.props.onLoadFromApi()
  }

  render () {
    var content
    switch (this.state.view) {
      case 'create':
        break;
      case 'delete':
        break;
      case 'show':
        break;
      case 'edit':
        break;
      case 'index':
      default:
        content = (<Table rows={this.props.gameList}
                          onShow={this.props.onShow}
                          onEdit={this.props.onEdit}
                          onDelete={this.props.onDelete} />)
    }
    return (
      <div className={this.props.className}>
        {content}
      </div>
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

