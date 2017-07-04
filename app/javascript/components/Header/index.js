import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Header.css'
import Link from 'react-router-redux-dom-link';

const propTypes = {
  className: PropTypes.string,
}

class Header extends React.Component {
  render () {
    const classNames = cx(styles.header, this.props.className)
    return (
      <header className={classNames} >
        <Link to="/"><h1>GameStock</h1></Link>
      </header>
    )
  }
}

export default Header