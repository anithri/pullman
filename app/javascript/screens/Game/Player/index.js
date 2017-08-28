import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Panel from 'components/Panel'
import playerShape from 'store/player/shape'
import styles from './styles'

const propTypes = {
  ...playerShape,
}

class Player extends React.Component {
  render () {
    const {
      className, id, name, skin, persona,
      mystery, magic, mayhem, monies, morale, menace
    } = this.props
    const myClasses = cx(
      className,
      styles.player,
      styles[id]
    )
    return (
      <Panel className={myClasses} skin={skin}>
        <header>
          <h3>{name}</h3>
          <h4>{persona}</h4>
        </header>
        <section>
          <div>Magic: {magic}</div>
          <div>Mayhem: {mayhem}</div>
          <div>Menace: {menace}</div>
          <div>Monies: {monies}</div>
          <div>Morale: {morale}</div>
          <div>Mystery: {mystery}</div>
        </section>
        <footer>
          Footer
        </footer>
      </Panel>
    )
  }
}

Player.propTypes = propTypes

export default Player
