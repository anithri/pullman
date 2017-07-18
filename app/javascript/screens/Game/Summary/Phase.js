import React from 'react'
import PropTypes from 'prop-types'

class PhaseSummary extends React.Component {
  render () {
    // const {text} = this.props
    // const actions = this.props.actions.map(act => {
    //
    //   return (
    //     <button key={'starting' + act } onClick={e => actions.changePhase('Starting')}>Starting</button>
    //   )
    // })
    return (
      <div className={this.props.className}>
        <h3>Phase Summary</h3>
      </div>
    )
  }
}

PhaseSummary.propTypes = {
  className: PropTypes.string
}

export default PhaseSummary
