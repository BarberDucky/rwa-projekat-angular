import { User } from "../model/user";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from './reducers/user.reducer'
import 'rxjs'
export interface State {
    user: User
}

export const rootReducer: ActionReducerMap<State> = {
    user: userReducer
}