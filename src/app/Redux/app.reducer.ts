import * as AppActions from './app.actions';
import { AppState } from './app.state';

export function AppReducer(state: AppState, action: AppActions.Actions) {
    switch (action.type) {
        case AppActions.ADD_STATE:
            return state = action.payload;
        case AppActions.REMOVE_STATE:
            return state = null;
    }
}
