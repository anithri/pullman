import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Summary.css'
import gameShape from 'store/game/shape'

const propTypes = {
  className: PropTypes.string,
  game: PropTypes.shape(gameShape)
}

const Ready = (props) => {

  return (
    <div className={props.className}>
      Ready
    </div>
  )
}
const NotReady = (props) => {

  return (
    <div className={props.className}>
      NotReady
    </div>
  )
}


class Summary extends React.Component {
  render () {
    const {className, game} = this.props
    const myClasses = cx(
      className,
      styles.summary
    )
    const Body = game.isReady ? Ready : NotReady
    return (
      <Body className={myClasses} />
    )
  }
}

Summary.propTypes = propTypes

export default Summary
