import { Question } from "../../model/question";
import { Action } from "@ngrx/store";
import { SELECT_QUESTION, DESELECT_QUESTION, DELETE_QUESTION_SUCC } from "../actions.types";
import { SelectQuestion } from "../actions";

const initialState: Question = null

export default function (state: Question = initialState, action: Action) {
    switch(action.type){
        case SELECT_QUESTION: {
            const {question} = action as SelectQuestion
            return question
        }
        case DESELECT_QUESTION: {
            return initialState
        }
        case DELETE_QUESTION_SUCC: {
            return initialState
        }
        default: {
            return state
        }
    }
}