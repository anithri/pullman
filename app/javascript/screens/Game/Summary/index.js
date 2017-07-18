import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Phase from './Phase'
import Score from './Score'

import styles from './Summary.css'

const actionShapeData = {
  id: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

const propTypes = {
  className: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape(actionShapeData)
  )
}

class Summary extends React.Component {
  render () {
    const {className, phase, actions} = this.props
    const myClasses = cx(
      className,
      styles.summary
    )

    // const actionButtons = this.renderActions(actions)

    return (
      <div className={myClasses}>
        <Phase className={styles.phase}/>
        <Score className={styles.score}/>
      </div>
    )
  }
}

Summary.propTypes = propTypes

export default Summary
