import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch, Redirect, withRouter} from 'react-router'

import GameInBox from 'pages/Game/InBox'

const GameAtStart = (props) => <div>GameAtStart</div>
const RoundAtStart = (props) => <div>RoundAtStart</div>
const TurnAtStart = (props) => {
  console.log(props);
  return (<div>TurnAtStart</div>)
}
const Action = (props) => <div>Action</div>
const TurnAtEnd = (props) => <div>TurnAtEnd</div>
const RoundAtEnd = (props) => <div>RoundAtEnd</div>
const GameAtEnd = (props) => <div>GameAtEnd</div>
const GameError = (props) => <div>GameError</div>

class GameRoutes extends React.Component {
  render () {
    console.log('GameRoutes', this.props)
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route path='/game' exact component={GameInBox}/>
          <Route path='/game/start' exact component={GameAtStart}/>
          <Route path='/game/round/:roundid' exact component={RoundAtStart}/>
          <Route path='/game/round/:roundid/turn/:turnid/' exact
                 component={TurnAtStart}/>
          <Route path='/game/round/:roundid/turn/:turnid/action' exact
                 component={Action}/>
          <Route path='/game/round/:roundid/turn/:turnid/final' exact
                 component={TurnAtEnd}/>
          <Route path='/game/round/:roundid/final' exact
                 component={RoundAtEnd}/>
          <Route path='/game/final' component={GameAtEnd}/>
          <Route component={GameError}/>
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default withRouter(GameRoutes)
