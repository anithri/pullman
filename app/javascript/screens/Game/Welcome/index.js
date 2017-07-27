import React from 'react'
import PropTypes from 'prop-types'
const NotReady = ({className}) => {
  return (
    <div className={className}>
      <h3>Game will start when all players are ready</h3>
      <button className="skin-disabled" disabled>Start Game</button>
    </div>
  )
}

const Ready = ({startGame}) => {
  return(
    <div>
      <h3>All Players ready to start</h3>
      <button onClick={startGame} className="skin-green">Start Game</button>
    </div>
  )
}

class Welcome extends React.Component {
  render () {
    const {allPlayersReady} = this.props
    const Body = allPlayersReady ? Ready : NotReady
    return (<Body {...this.props} />)
  }
}

Welcome.propTypes = {
  className: PropTypes.string,
  startGame: PropTypes.func
}

export default Welcome