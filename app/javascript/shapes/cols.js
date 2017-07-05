import PropTypes from 'prop-types'

export const colShape = PropTypes.shape({
  col: PropTypes.string.isRequired,
  label: PropTypes.string
})

export const colsShape = PropTypes.arrayOf(colShape)

export default colsShape

