import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Summary.css'
import gameShape from 'store/game/shape'

const propTypes = {
  className: PropTypes.string,
  game: PropTypes.shape(gameShape),
  doGameQuit: PropTypes.func
}

const Unready = ({className, doGameQuit}) => {
  return (
    <div className={className}>
      <h3>Starting the Game!</h3>
      <button onClick={doGameQuit}>Back to Player Customization</button>
    </div>
  )
}

const Ready = ({className, doGameQuit}) => {
  return (
    <div className={className}>
      <h3>Ready to Play</h3>
      <button>Lets get started</button>
      <button onClick={doGameQuit}>Back to Player Customization</button>
    </div>
  )
}

class AtStartSummary extends React.Component {
  render () {
    const {className, game, doGameQuit} = this.props
    const myClasses = cx(
      className,
      styles.summary
    )
    const MyComp = game.isReady ? Ready : Unready
    return (<MyComp className={myClasses}
                    doGameQuit={doGameQuit}/>)
  }
}

AtStartSummary.propTypes = propTypes

export default AtStartSummary
