import { UserInfo } from './app.state';
import { Action } from '@ngrx/store';

export const ADD_STATE = 'ADD STATE';
export const REMOVE_STATE = 'REMOVE STATE';

export class AddAppState implements Action {
    readonly type = ADD_STATE;
    constructor(public payload: UserInfo) {
    }
}

export class RemoveAppState implements Action {
    readonly type = REMOVE_STATE;
}

export type Actions = AddAppState | RemoveAppState;
