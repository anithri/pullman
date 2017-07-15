import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './GameGrid.css'
import addRegion from './Region'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
}


class GameGrid extends React.Component {
  render () {
    const classNames = cx(
      styles.grid, this.props.className
    )

    return (
      <div className={classNames} >
        {this.props.children}
      </div>
    )
  }
}
GameGrid.propTypes = propTypes

export default GameGrid
export {
  addRegion
}