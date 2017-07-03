import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { actions} from 'store/games/reducers'
import { gameCount, gameList } from 'store/games/selectors'
import Table from 'components/Table'
const headers = ['Name','Mechanics','Description']
const keys = ['name','mechanics','description']
const propTypes = {
  className: PropTypes.string,
  gameCount: PropTypes.number,
  children: PropTypes.array,
  gameList: PropTypes.arrayOf(PropTypes.object)
}

class Game extends React.Component {
  componentDidMount() {
    this.props.onLoadFromApi()
  }

  render () {
    return (
      <div className={this.props.className}>
        <Table headers={headers}
               rows={this.props.gameList}
               keys={keys}
        />
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
    onLoadFromApi: (e) => {dispatch(actions.fetchGames())}
    // onChangeConfig: (e) => { dispatch(actions.changeConfig(e)) },
    // onChangeSeason: (e) => { dispatch(actions.changeSeason(e)) },
    // onChangePedPoint: (e) => { dispatch(actions.changePedPoint(e)) }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game)

