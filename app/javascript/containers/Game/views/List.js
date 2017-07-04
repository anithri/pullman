import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Link from 'react-router-redux-dom-link';
import {compose, mapProps} from 'recompose'
import {actions} from 'store/games/reducers'

const propTypes = {}

class List extends React.Component {
  constructor (props) {
    super(props)
    this.nestPath = this.nestPath.bind(this)
  }
  nestPath(path) {
    return this.props.match.path + path.slice(1)
  }
  render () {
    const nestPath = this.nestPath
    return (
      <div>
        <h3>containers # Game # Components # List</h3>
        <ul>
          <li><Link to={nestPath("/new")}>New</Link></li>
          <li><Link to={nestPath("/42")}>Show 42</Link></li>
          <li><Link to={nestPath("/42/edit")}>Edit 42</Link></li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(List)
