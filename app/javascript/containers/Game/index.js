import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.array
}

class Game extends React.Component {
  render () {
    return (
      <div>
        Game Container
      </div>
    )
  }
}

export default Game