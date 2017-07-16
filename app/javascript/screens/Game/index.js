import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Game'

const propTypes = {
  className: PropTypes.string,
  phase: PropTypes.string
}

class Game extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.game
    )
    return (
      <div className={myClasses}>
        <h3>{this.props.phase}</h3>
      </div>
    )
  }
}

Game.propTypes = propTypes

export default Game
