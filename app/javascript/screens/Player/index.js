import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from 'recompose'

import cx from 'classnames'
import Panel from 'components/Panel'
import playerShape from 'store/player/shape'
import styles from './styles'
import ResourceBadge from 'components/ResourceBadge'

const MagicBadge = withProps({name: 'Magic', className: styles.Magic})(ResourceBadge)
const MayhemBadge = withProps({name: 'Mayhem', className: styles.Mayhem})(ResourceBadge)
const MenaceBadge = withProps({name: 'Menace', className: styles.Menace})(ResourceBadge)
const MoniesBadge = withProps({name: 'Monies', className: styles.Monies})(ResourceBadge)
const MoraleBadge = withProps({name: 'Morale', className: styles.Morale})(ResourceBadge)
const MysteryBadge = withProps({name: 'Mystery', className: styles.Mystery})(ResourceBadge)

const propTypes = {
  ...playerShape,
}

class Player extends React.Component {
  render () {
    const {
      className, id, name, skin, persona, cards,
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
          <MagicBadge value={magic}/>
          <MayhemBadge value={mayhem}/>
          <MenaceBadge value={menace}/>
          <MoniesBadge value={monies}/>
          <MoraleBadge value={morale}/>
          <MysteryBadge value={mystery}/>
          <div>Cards: {cards.length} </div>
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
