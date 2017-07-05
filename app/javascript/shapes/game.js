import PropTypes from 'prop-types'

export const gameShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
})

export default gameShape

