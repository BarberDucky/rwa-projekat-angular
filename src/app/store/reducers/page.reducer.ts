import {Action} from '@ngrx/store'
import * as actions from '../actions'
import * as types from '../actions.types'

const initialState: string = 'main'

export default function(state: string = initialState, action: Action) {
    switch(action.type) {
        case types.UPDATE_PAGE: {
            return (action as actions.UpdatePage).page
        }
        case types.GET_ALL_QUESTIONS_SUCC: {
            return 'main'
        }
        case types.SELECT_QUESTION: {
            return 'question'
        }
        case types.LOGOUT: {
            return 'main'
        }
    }
}