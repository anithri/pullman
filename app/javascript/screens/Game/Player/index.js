import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Player'

const propTypes = {
  className: PropTypes.string,
  playerId: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired
}

class Player extends React.Component {
  render() {
    const {className, id, name, order} = this.props
    const myClasses = cx(
        className,
      styles.player,
      styles[id],
      styles[`order-${order}`]
    )
    return (
      <div className={myClasses}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    )
  }
}

Player.propTypes = propTypes

export default Player
