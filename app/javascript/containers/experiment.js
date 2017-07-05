import React from 'react'

var Table, Row
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {compose} from 'recompose'

const Headers = ({}) => {

  return (

  )
}
function headersFromCols(cols) {


  return (
    <tr>

    </tr>
  )
}

function hasMany (settings) {
  // BUILD connect and get list of items
  const {
    itemsSelector, colsSelector,
    rowComponent, headerComponent,
    keys
  } = settings


  return compose(
    connect((state, props) => {
      const items = itemsSelector(state)
      const cols = colsSelector(state)
      const headerList = headersFromCols(cols)
      const headers = (component)
      return {
        items,
        rowComponent: {},
        headers

      }
    }),
    mapProps((origProps) => {
      return {
        ...origProps,
        className

      }
    })
  )
}


export default hasMany

const SmartTable = hasMany({className: 'myTable'})(Table)
a = (
  <Table items={[]}
         className="myTable"
         rowComponent={}
         headerComponent={}
         actions={[]}
  />
)
smarta = (
  <SmartTable className="myTable" actions={[]}/>
)

const SmartRow = hasOne()(TableRow)
b = (
  <Row item={}
       className="myRow"
       actions={[]}

  />
)