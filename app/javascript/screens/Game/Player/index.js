import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Player'

const propTypes = {
  className: PropTypes.string,
  playerId: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

class Player extends React.Component {
  render() {
    const {className, id, name} = this.props
    const myClasses = cx(
        className,
      styles.player,
      styles[id]
    )
    return (
      <div className={myClasses}>
        <h3>{name}</h3>
      </div>
    )
  }
}

Player.propTypes = propTypes

export default Player
