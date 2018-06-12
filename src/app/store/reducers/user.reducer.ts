import {Action} from '@ngrx/store'
import {User} from '../../model/user'
import * as actions from '../actions'
import * as types from '../actions.types'

const initialState: User = null

export default function(state: User, action: Action) {
    switch (action.type) {
        case types.AUTH_SUCC: 
        {
            const {user} = action as actions.AuthSucc
            return user
        }
        default:
        {
            return state
        }
    }
}