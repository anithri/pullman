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
        <Region name="city"/>
        <Region name="frontier" />
        <Region name="border" />
        <Region name="wilderness" />
        <Region name="lair" />
      </EvenStackedFlex>
    )
  }
}

export default Board
