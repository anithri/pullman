import React from 'react'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router'
import routeShape from 'shapes/route'
import matchShape from 'shapes/match'

import {
  ListScreen,
  CreateScreen,
  DetailsScreen,
  EditScreen
} from 'screens/Game'

const defaultRoutes = [
  {path: '/', screen: ListScreen, isExact: true},
  {path: '/new', screen: CreateScreen},
  {path: '/:id(\\d+)/edit', screen: EditScreen},
  {path: '/:id(\\d+)', screen: DetailsScreen}
]

class GameRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.childRoutes = this.childRoutes.bind(this)
  }
  childRoutes () {
    const routes = this.props.routes
    const baseUrl = this.props.match.url
    return routes.map(({path,screen,isExact}) => {
      let childPath = baseUrl + path
      return (
        <Route path={childPath}
               component={screen}
               exact={!!isExact}
               key={childPath}
        />
      )
    })
  }

  render () {
    console.log('GameRouts#props', this.props)
    return (
      <div className={this.props.className}>
        <Switch>
          {this.childRoutes()}
        </Switch>
      </div>
    )
  }
}

GameRoutes.propTypes = {
  match: matchShape.isRequired,
  routes: PropTypes.arrayOf(
    routeShape.isRequired
  ).isRequired
}

GameRoutes.defaultProps = {
  routes: defaultRoutes,
}
export default GameRoutes
