import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
}

class Footer extends React.Component {
  render () {
    const classNames = cx(styles.footer, this.props.className)
    return (
      <footer className={classNames} >
        <h3>Footer</h3>
      </footer>
    )
  }
}

export default Footer