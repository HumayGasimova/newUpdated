import { of, interval } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
// import { interval } from "rxjs"

export const startAddingQOpsEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_ADDING_Q_OPS),
        mergeMap(action => {
            return interval(84).pipe(
                mergeMap(() => {
                   return of(
                        Actions.addQOps(action.chipsNumber)
                    )
                }),
                takeUntil(action$.ofType(actionTypes.STOP_ADDING_Q_OPS))
            )
        }) 
    )
    
export default startAddingQOpsEpic;
