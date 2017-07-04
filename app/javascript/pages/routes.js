import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch} from 'react-router'

import HomePage from 'pages/Home'
import GamesPage from 'pages/Games'
import ErrorPage from 'pages/Error'

class PageRoutes extends React.Component {
  render () {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="max">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/games" component={GamesPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

export default PageRoutes
