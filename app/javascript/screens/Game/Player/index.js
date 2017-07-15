import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Player'

const propTypes = {
  className: PropTypes.string,
  playerId: PropTypes.number.isRequired
}

class Player extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.player
    )
    return (
      <div className={myClasses}>
        <h3>Player {this.props.playerId}</h3>
      </div>
    )
  }
}

Player.propTypes = propTypes

export default Player
