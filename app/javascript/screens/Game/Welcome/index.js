import React from 'react'

class Welcome extends React.Component {
  handleClick (e) {
    console.log('handleClick',e)
  }
  render () {
    return (
      <div className={this.props.className}>
        <h3>Welcome Screen</h3>
        <button onClick={this.props.startGame}>Start Game</button>
      </div>
    )
  }
}

export default Welcome