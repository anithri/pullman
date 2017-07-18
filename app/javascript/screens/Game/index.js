import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Game'
import {constants as phaseConstants} from 'store/phases/phaseData'
const GAME_LOOP = phaseConstants.GAME_LOOP
import origPhase from 'store/phases/Phase'
import phaseContainer from 'store/phases/container'
const Phase = phaseContainer(origPhase)

const propTypes = {
  className: PropTypes.string,
  phase: PropTypes.string,
}


class Game extends React.Component {
  render () {
    console.log('GAME',phaseConstants)
    const myClasses = cx(
      this.props.className,
      styles.game
    )
    return (
      <Phase id={GAME_LOOP} className={myClasses}/>
    )
  }
}

Game.propTypes = propTypes

export default Game

// {/*<Action className={myClasses} groupName="Game">*/}
// {/*<Action className={inBoxGroup} groupName="GamePhase - inBox">*/}
// {/*<Action className={inBoxAction} groupName="inBox - setupGame"/>*/}
// {/*</Action>*/}
// {/*<Action className={setupGroup} groupName="GamePhase - setUp">*/}
// {/*<Action className={setupAction} groupName="setUp - seatPlayers"/>*/}
// {/*<Action className={setupAction} groupName="setUp - prepareBoard"/>*/}
// {/*<Action className={setupAction} groupName="setUp - playGame"/>*/}
// {/*</Action>*/}
// {/*<Action className={mainGroup} groupName="GamePhase - playGame">*/}
// {/*<Action className={mainAction} groupName="playGame - startGame"/>*/}
// {/*<Action className={mainAction} groupName="playGame - startRounds"/>*/}
// {/*<Action className={mainAction} groupName="playGame - endGame"/>*/}
// {/*</Action>*/}
// {/*<Action className={roundGroup} groupName="GamePhase - playRound" >*/}
// {/*<Action className={roundAction} groupName="playRound - startRound"/>*/}
// {/*<Action className={roundAction} groupName="playRound - startTurns"/>*/}
// {/*<Action className={roundAction} groupName="playRound - endRound"/>*/}
// {/*</Action>*/}
// {/*<Action className={playerGroup} groupName="GamePhase - playerTurn" >*/}
// {/*<Action className={playerAction} groupName="playerTurn - startPlayerTurn"/>*/}
// {/*<Action className={playerAction} groupName="playerTurn - doPlayerAction"/>*/}
// {/*<Action className={playerAction} groupName="playerTurn - endPlayerTurn"/>*/}
// {/*</Action>*/}
// {/*<Action className={playerActionGroup} groupName="GamePhase - playerAction" >*/}
// {/*<Action className={playerActionAction} groupName="playerAction - startPlayerAction"/>*/}
// {/*<Action className={playerActionAction} groupName="playerAction - doPlayerAction"/>*/}
// {/*<Action className={playerActionAction} groupName="playerAction - endPlayerAction"/>*/}
// {/*</Action>*/}
// {/*<Action className={tearDownGroup} groupName="GamePhase - tearDown">*/}
// {/*<Action className={tearDownAction} groupName="tearDown - toBox" />*/}
// {/*</Action>*/}
// {/*</Action>*/}
