import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  withComponent: PropTypes.node,
  children: PropTypes.arrayOf(PropTypes.node),
  skin: PropTypes.string
}

class Panel extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.card,
       `card-${this.props.skin}`

    )
    const MyPanel = this.props.withComponent
    return (
      <MyPanel className={myClasses}>
        {this.props.children}
      </MyPanel>
    )
  }
}

Panel.propTypes = propTypes
Panel.defaultProps = {
  withComponent: 'article'
}
export default Panel
