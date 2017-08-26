import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Card from 'components/Card'
import playerShape from 'store/player/shape'
import styles from './styles'

const propTypes = {
  ...playerShape,
}

class Player extends React.Component {
  render () {
    const {
      className, id, name, skin, persona,
      mystery, magic, mayhem, monies, morale
    } = this.props
    const myClasses = cx(
      className,
      styles.player,
      styles[id]
    )
    return (
      <Card className={myClasses} skin={skin}>
        <header>
          <h3>{name}</h3>
          <h4>{persona}</h4>
        </header>
        <section>
          <div>mystery: {mystery}</div>
          <div>magic: {magic}</div>
          <div>mayhem: {mayhem}</div>
          <div>monies: {monies}</div>
          <div>morale: {morale}</div>
        </section>
        <footer>
          Footer
        </footer>
      </Card>
    )
  }
}

Player.propTypes = propTypes

export default Player
