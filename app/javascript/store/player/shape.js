import PropTypes from 'prop-types'

export const player = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired,
  seat: PropTypes.string.isRequired,
  persona: PropTypes.string.isRequired,
  isReady: PropTypes.bool,
  mystery: PropTypes.number.isRequired,
  magic: PropTypes.number.isRequired,
  mayhem: PropTypes.number.isRequired,
  monies: PropTypes.number.isRequired,
  morale: PropTypes.number.isRequired,
  cards: PropTypes.shape({
    city: PropTypes.array,
    border: PropTypes.array,
    frontier: PropTypes.array,
    wilderness: PropTypes.array,
    lair: PropTypes.array
  })

}

export default player