import PropTypes from 'prop-types'

const cardShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regions: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default cardShape
