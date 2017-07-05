import React from 'react'
import PropTypes from 'prop-types'

import colsShape from 'shapes/cols'
const Cell = 'th'
class Row extends React.Component {

  renderCells(cells) {
    return cells.map(renderCell)
  }

  renderCell(cell) {
    return(
      <Cell key={cell.key}>

      </Cell>
    )
  }

  render() {
    return (
      <tr>
        {this.renderCols(this.props.cols)}
      </tr>
    )
  }

}

Row.propTypes = {
  cols: colsShape,
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ])
  cell: PropTypes.oneOfType([

  ])
}

export default Row
