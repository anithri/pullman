import React from 'react'
import PropTypes from 'prop-types'
import {withProps} from 'recompose'

import cx from 'classnames'
import Panel from 'components/Panel'
import playerShape from 'store/player/shape'
import styles from './styles'
import Badge  from 'components/ResourceBadge'

const propTypes = {
  ...playerShape,
}

class Stats extends React.Component {
  render () {
    const {
      className, id, name, skin, persona, cards,
      mystery, magic, mayhem, monies, morale, menace
    } = this.props
    const myClasses = cx(
      className,
      styles.stats
    )
    return (
      <section className={myClasses}>
        <Badge name="Magic" value={magic} className={styles.magic}/>
        <Badge name="Mayhem" value={mayhem} className={styles.mayhem}/>
        <Badge name="Mystery" value={mystery} className={styles.mystery}/>
        <Badge name="Menace" value={menace} className={styles.menace}/>
        <Badge name="Monies" value={monies} className={styles.monies}/>
        <Badge name="Morale" value={morale} className={styles.morale}/>
      </section>

    )
  }
}

export default Stats
