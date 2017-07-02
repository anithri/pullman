import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  className: PropTypes.string,
  gameCount: PropTypes.number,
  children: PropTypes.array
}

class Game extends React.Component {
  render () {
    return (
      <div className={this.props.className}>
        <h2>Game Container</h2>
        <p>Game Count: {this.props.gameCount}</p>

      </div>
    )
  }
}

export default Game
