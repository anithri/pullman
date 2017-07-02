// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from '../boot.css'
const Hello = props => (
  <div className={styles.woot}>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'Wooticus Prime'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.getElementById('appContainer'),
  )
})
