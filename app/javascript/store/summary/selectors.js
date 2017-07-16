import {createSelector} from 'reselect'
import {currentPhase} from 'store/game/selectors'
import {phaseText} from 'store/summary/static'

export const currentPhaseText = createSelector(
  [currentPhase],
  (phase) => {console.log(phaseText,phase);return phaseText[phase]}
)


