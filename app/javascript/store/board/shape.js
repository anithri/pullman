import PropTypes from 'prop-types'

export const regionShape = {
  left: PropTypes.arrayOf(PropTypes.string).isRequired,
  center: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  right: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export const boardShape = {
  city: PropTypes.shape(regionShape).isRequired,
  frontier: PropTypes.shape(regionShape).isRequired,
  border: PropTypes.shape(regionShape).isRequired,
  wilderness: PropTypes.shape(regionShape).isRequired,
  lair: PropTypes.shape(regionShape).isRequired,
}

