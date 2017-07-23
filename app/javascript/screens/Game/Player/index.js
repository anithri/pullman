import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Player'

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired
}

class Player extends React.Component {
  render () {
    const {className, id, name, skin} = this.props
    const myClasses = cx(
      className,
      styles.player,
      styles[id],
      `card-${skin}`
    )
    return (
      <div className={myClasses}>
        <header>
          <h3>{name}</h3>
        </header>
      </div>
    )
  }
}

Player.propTypes = propTypes

export default Player
