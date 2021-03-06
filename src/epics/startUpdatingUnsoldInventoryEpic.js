import { of, interval, empty } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/observable/empty';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
// import { mergeMap, takeUntil, ofType, repeat } from 'rxjs/operators';
// import { interval } from "rxjs"

export const startUpdatingUnsoldInventoryEpic = (action$, state$) => 
    action$.pipe(
        ofType(actionTypes.START_UPDATING_UNSOLD_INVENTORY),
        mergeMap(action => {
            return interval(state$.value.business.delayUnsoldInventary).pipe(
                mergeMap(() => {
                    if(state$.value.business.unsoldInventory > 0){
                        // debugger
                        return of(
                                Actions.updateUnsoldInventory(),
                                Actions.updateFunds(state$.value.business.paperclipPrice)
                            )
                        } else{
                            return empty()
                        }
                }),
                takeUntil(action$.ofType(actionTypes.STOP_UPDATING_UNSOLD_INVENTORY))
            )    
        })
    )
            
export default startUpdatingUnsoldInventoryEpic;
