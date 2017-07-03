import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { actions} from 'store/games/reducers'
import { gamesCount } from 'store/games/selectors'

const propTypes = {
  className: PropTypes.string,
  gameCount: PropTypes.number,
  children: PropTypes.array
}

class Game extends React.Component {
  componentDidMount() {
    this.props.onLoadFromApi()
  }

  render () {
    return (
      <div className={this.props.className}>
        <h2>Game Container</h2>
        <p>Game Count: {this.props.gameCount}</p>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameCount: gamesCount(state)
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

