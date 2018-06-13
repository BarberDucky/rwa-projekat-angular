import {Action} from '@ngrx/store'
import * as actions from '../actions'
import * as types from '../actions.types'

export interface listState {
    title: string,
    criteria: any
}

const initialState: listState = {
    title: 'Sva pitanja',
    criteria: null
}

export default function(state: listState = initialState, action: Action) {
    switch(action.type) {
        case types.SELECT_LIST: {
            const {title, criteria} = action as actions.SelectList
            return {title, criteria}
        }
        default: {
            return state
        }
    }
}