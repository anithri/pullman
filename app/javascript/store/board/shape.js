import PropTypes from 'prop-types'

export const regionShape = {
  name: PropTypes.string,
  left: PropTypes.array,
  center: PropTypes.array,
  right: PropTypes.array,
}

export const boardShape = {
  regions: PropTypes.shape({
    city: PropTypes.shape(regionShape).isRequired,
    frontier: PropTypes.shape(regionShape).isRequired,
    border: PropTypes.shape(regionShape).isRequired,
    wilderness: PropTypes.shape(regionShape).isRequired,
    lair: PropTypes.shape(regionShape).isRequired
  })
}

