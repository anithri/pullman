import PropTypes from 'prop-types'

const cardShape = {
  cardId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regions: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardClass: PropTypes.string
}

export default cardShape
