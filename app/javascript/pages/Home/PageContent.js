import React from 'react'
import Link from 'react-router-redux-dom-link';

class PageContent extends React.Component {
  render () {
    return (
        <main className={this.props.className}>
          <h1>Woot, I'm a home page</h1>
          <Link to="/games">Go to Games!</Link>
        </main>
    )
  }
}

export default PageContent