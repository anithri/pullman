import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch, Redirect} from 'react-router'

import HomePage from 'pages/Home'
import AboutPage from 'pages/About'
import ErrorPage from 'pages/Error'
import GameRoutes from 'pages/Game/routes'

class PageRoutes extends React.Component {
  render () {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/home" exact component={HomePage}/>
          <Route path="/game" component={GameRoutes}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route component={ErrorPage}/>
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default PageRoutes
