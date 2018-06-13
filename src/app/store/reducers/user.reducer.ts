import {Action} from '@ngrx/store'
import {User} from '../../model/user'
import * as actions from '../actions'
import * as types from '../actions.types'

const initialState: User = null

export default function(state: User = initialState, action: Action) {
    switch (action.type) {
        case types.AUTH_SUCC: 
        {
            const {user} = action as actions.AuthSucc
            return user
        }
        case types.LOGOUT: 
        {
            return null
        }
        case types.UPDATE_USER:
        {
            const {user} = action as actions.UpdateUser
            return user
        }
        default:
        {
            return state
        }
    }
}