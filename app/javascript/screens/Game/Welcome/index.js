import React from 'react'

class Welcome extends React.Component {
  handleClick (e) {
    console.log('handleClick',e)
  }
  renderNotReady () {
    return (
      <div className={this.props.className}>
        <h3>Game will start when all players are ready</h3>
        <button className="skin-disabled" disabled>Start Game</button>
      </div>
    )
  }

  renderReady (onClick) {
    return(
      <div>
        <h3>All Players ready to start</h3>
        <button onClick={()=>onClick()} className="skin-green">Start Game</button>
      </div>
    )
  }
  render () {
    const {allPlayersReady} = this.props
    return allPlayersReady ? this.renderReady(this.props.startGame) : this.renderNotReady()
  }
}

export default Welcome