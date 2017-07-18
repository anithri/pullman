import React from 'react'
import PropTypes from 'prop-types'

import phaseData, {phaseDataShape} from './phaseData'

class Phase extends React.Component {
  constructor(props) {
    super(props)
    this.renderChild = this.renderChild.bind(this)
  }

  renderChild(child) {

    if (typeof child === 'string' && phaseData[child] ) {
      return (<li key={child}><Phase {...phaseData[child]} /></li>)
    } else if ( typeof a === 'function') {
      const output = a()
      return (
        <li key={output}>{output}</li>
      )
    } else {
      return (<li key={child}>{child}</li>)
    }


  }

  render() {
    const {className, actions, id, text} = this.props
    console.log('actions', phaseData)
    const kids = actions.map(child => this.renderChild(child))
    return (
      <div className={className}>
        <h3>{id}</h3>
        <ul>
          {kids}
        </ul>
      </div>
    )

  }
}

Phase.propTypes = {
  className: PropTypes.string,
  ...phaseDataShape
}

export default Phase




























