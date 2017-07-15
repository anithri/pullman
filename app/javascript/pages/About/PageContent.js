import React from 'react'
import Link from 'react-router-redux-dom-link';

class PageContent extends React.Component {
  render () {
    return (
        <main className={this.props.className}>
          <h1>Woot, I'm an about page</h1>
        </main>
    )
  }
}

export default PageContent