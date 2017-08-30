import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from 'recompose'

import cx from 'classnames'
import Panel from 'components/Panel'
import playerShape from 'store/player/shape'
import styles from './styles'
import Stats from './Stats'
import Hand from './Hand'
const propTypes = {
  ...playerShape,
}

class Player extends React.Component {
  render () {
    const {
      className, id, name, skin, persona, cards
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
        <Stats {...this.props} />
        <Hand cards={cards}/>
        <footer>
          Footer
        </footer>
      </Panel>
    )
  }
}

Player.propTypes = propTypes

export default Player
