import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/mapTo';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/repeat';
// .timeInterval(2000)
// import { interval } from "rxjs"
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';

export const startRunningStrategicModelingEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_RUNNING_STRATEGIC_MODELING),
        mergeMap(action => {
           switch(state$.value.business.chosenListDropdown[1]){
                case "Pick a Start":
                    return of(
                        // Actions.strategyChosen("RANDOM", true),
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.tournamentStarted(),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.tournamentDuration(),

                    )
                case "RANDOM":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("RANDOM", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
                case "A100":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("A100", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
                case "B100":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("B100", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
                case "GREEDY":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("GREEDY", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
                case "GENEROUS":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("GENEROUS", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
                case "MINIMAX":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("MINIMAX", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
                case "TIT FOR TAT":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("TIT FOR TAT", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
                case "BEAT LAST":
                    return of(
                        Actions.toggleNewTournamentButton(),
                        Actions.clearChosenFromStrategicModelingDropdownList(),
                        Actions.strategyChosen("BEAT LAST", true),
                        Actions.tournamentStarted(),
                        Actions.toggleStrategicModelingLeftPart(false),
                        Actions.setPlayersArrays(),
                        Actions.showRoundAndPlayers(true),
                        Actions.startUpdatingRoundsOnScreen(),
                        Actions.startUpdatingPlayerLeftOnScreen(),
                        Actions.startUpdatingPlayerTopOnScreen(),
                        Actions.gameStarted(),
                        Actions.strategicModelingResult(),
                        Actions.tournamentDuration(),
                    )
           }
            return of(
                Actions.tournamentState(false),
                Actions.toggleNewTournamentButton()
            ) 
        })
    ) 
    
export default startRunningStrategicModelingEpic;
