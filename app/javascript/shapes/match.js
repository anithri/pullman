import PropTypes from 'prop-types'

export const matchShape = PropTypes.shape({
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isExact: PropTypes.bool.isRequired
})

export default matchShape
