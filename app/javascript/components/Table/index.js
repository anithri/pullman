import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Table.css'

const propTypes = {
  className: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object),
  keys: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.arrayOf(PropTypes.element),
}

class Table extends React.Component {
  constructor (props) {
    super(props)

    this.tableHeaders = this.tableHeaders.bind(this)
    this.tableRow = this.tableRow.bind(this)
    this.tableBody = this.tableBody.bind(this)
    this.tableActions = this.tableActions.bind(this)
    this.hasActions = this.hasActions.bind(this)
  }

  hasActions () {
    return this.props.actions.length > 0
  }

  tableActions (obj) {
    return (
      <td>
        <button>Show</button>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    )
  }

  tableHeaders () {
    const cells = this.props.headers.map(h => <th key={h}>{h}</th>)
    return (<tr>{cells}</tr>)
  }

  tableRow (obj) {
    const cells = this.props.keys.map(k => <td key={k}>{obj[k]}</td>)
    const actions = this.tableActions(obj)
    return (<tr key={obj.id}>{cells}{actions}</tr>)
  }

  tableBody () {
    return this.props.rows.map(item => this.tableRow(item))
  }

  render () {
    const headers = this.tableHeaders(this.props.headers)
    const body = this.tableBody()
    const classNames = cx(styles.table, this.props.className)
    return (
      <table className={classNames}>
        <thead>
        {headers}
        </thead>
        <tbody>
        {body}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = propTypes

export default Table