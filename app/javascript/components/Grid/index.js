import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
}

class Grid extends React.Component {
  render () {
    const classNames = cx(styles.grid, this.props.className)
    const regions = React.Children.map(this.props.children, child => {
      return child
    })
    return (
      <div className={classNames} >
        {regions}
      </div>
    )
  }
}

export default Grid