import * as AppActions from './app.actions';
import { UserInfo } from './app.state';
const initialState: UserInfo = {
    token: null
};

export function AppReducer(state: UserInfo = initialState, action: AppActions.Actions) {
    switch (action.type) {
        case AppActions.ADD_STATE:
            return state = action.payload;
        case AppActions.REMOVE_STATE:
            return state = null;
    }
}
