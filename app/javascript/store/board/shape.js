import PropTypes from 'prop-types'

export const boardShape = {
  city: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  frontier: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  wilderness: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}