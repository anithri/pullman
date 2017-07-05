import React from 'react'
import PropTypes from 'prop-types'

import colsShape from 'shapes/cols'
import {elementShape} from 'shapes/element'


class Body extends React.Component {

  renderRows(rows) {
    return rows.map(item => cell(item))
  }


  render() {
    const {items, className} = this.props
    const rows = this.renderRows(items)
    return (
      <tbody className={className}>
        {rows}
      </tbody>
    )
  }

}

Body.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    visible: PropTypes.bool
  })),
  className: PropTypes.string,
  component: elementShape
}

export default Body
