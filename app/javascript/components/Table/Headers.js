import React from 'react'
import PropTypes from 'prop-types'

import colsShape from 'shapes/cols'

class Headers extends React.Component {

  renderCols(cols) {
    return this.visibleCols(cols).map(colHeader)
  }

  colHeader({col, label}) {
    return (
      <th key={col}>
        {label}
      </th>
    )
  }

  visibleCols(cols) {
    return cols.filter(this.colsIsVisible)
  }

  colsIsVisible(col) {
    return !!col.label
  }

  render() {
    return (
      <thead className={this.props.className}>
        <tr>
          {this.renderCols(this.props.cols)}
        </tr>
      </thead>
    )
  }

}

Headers.propTypes = {
  cols: colsShape,
  className: PropTypes.string,
}

export default Headers
