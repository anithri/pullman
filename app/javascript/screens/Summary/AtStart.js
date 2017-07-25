import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Summary.css'
import gameShape from 'store/game/shape'

const propTypes = {
  className: PropTypes.string,
  game: PropTypes.shape(gameShape)
}

class Summary extends React.Component {
  render () {
    const {className, game} = this.props
    const myClasses = cx(
      className,
      styles.summary
    )
    return (
      <div className={myClasses}>
        <h3>Starting the Game!</h3>
      </div>
    )
  }
}

Summary.propTypes = propTypes

export default Summary
