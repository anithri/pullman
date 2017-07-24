import React from 'react'
import PropTypes from 'prop-types'

class ScoreSummary extends React.Component {
  render () {
    const {className} = this.props

    return (
      <div className={className}>
        <h3>Score</h3>
      </div>
    )
  }
}

ScoreSummary.propTypes = {
  className: PropTypes.string
}

export default ScoreSummary
