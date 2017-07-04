import React from 'react'
import PropTypes from 'prop-types'

import {Route, Switch} from 'react-router'
import routeShape from 'shapes/route'
import matchShape from 'shapes/match'

import {
  ListView,
  CreateView,
  DetailsView,
  EditView
} from 'containers/Game/views'

const defaultRoutes = [
  {path: '/', view: ListView, isExact: true},
  {path: '/new', view: CreateView},
  {path: '/:id(\\d+)/edit', view: EditView},
  {path: '/:id(\\d+)', view: DetailsView}
]

class GameRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.childRoutes = this.childRoutes.bind(this)
  }
  childRoutes () {
    const routes = this.props.routes
    const baseUrl = this.props.match.url

    return routes.map(({path,view,isExact}) => {

      let childPath = baseUrl + path
      return (
        <Route path={childPath}
               component={view}
               exact={!!isExact}
               key={childPath}
        />
      )
    })
  }

  render () {
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
