import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
}

class Header extends React.Component {
  render () {
    const classNames = cx(styles.header, this.props.className)
    return (
      <header className={classNames} >
        <h1>Games: Most Recent</h1>
      </header>
    )
  }
}

export default Header