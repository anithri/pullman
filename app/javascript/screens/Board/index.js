import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import EvenStackedFlex from 'components/EvenStackedFlex'

import styles from './styles.css'

import OrigRegion from './Region'
import regionContainer from 'store/board/regionContainer'
const Region = regionContainer(OrigRegion)

class Board extends React.Component {
  render() {
    const myClasses = cx(
      this.props.className,
        styles.board
    )
    return (
      <EvenStackedFlex className={myClasses}>
        <Region className={styles.city} name="city"/>
        <Region className={styles.frontier} name="frontier" />
        <Region className={styles.border} name="border" />
        <Region className={styles.wilderness} name="wilderness" />
        <Region className={styles.lair} name="lair" />
      </EvenStackedFlex>
    )
  }
}

export default Board
