import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.css'
import Link from 'react-router-redux-dom-link';

const propTypes = {
  className: PropTypes.string,
}

class Header extends React.Component {
  render () {
    const classNames = cx(styles.header, this.props.className)
    return (
      <header className={classNames} >
        <Link to="/"><h1>[GameStock]</h1></Link>
        <Link to="/game"><h1>[Game]</h1></Link>
        <Link to="/about"><h3>[About]</h3></Link>
        <Link to="/oops"><h3>[Error!]</h3></Link>
      </header>
    )
  }
}

export default Header