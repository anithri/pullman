import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Grid.css'
import addRegion from './Region'

const propTypes = {
  layout: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
}


class Grid extends React.Component {
  render () {
    const classNames = cx(
      styles[this.props.layout],
      styles.grid, this.props.className
    )

    return (
      <div className={classNames} >
        {this.props.children}
      </div>
    )
  }
}
Grid.propTypes = propTypes

export default Grid
export {
  addRegion
}