import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'
import { Question } from '../../model/question';
import { Action } from '@ngrx/store'
import { POST_QUESTION, POST_QUESTION_SUCC, GET_ALL_QUESTIONS_SUCC, PUT_QUESTION_SUCC, DELETE_QUESTION_SUCC } from '../actions.types';
import { PostQuestion, PostQuestionSucc, GetAllQuestionsSucc, PutQuestionSucc, DeleteQuestionSucc } from '../actions';

export interface QuestionsState extends EntityState<Question> {

}

const adapter: EntityAdapter<Question> = createEntityAdapter<Question>()

const initialState: QuestionsState = {
    ids: [],
    entities:{}
}

export default function (state: QuestionsState = initialState, action: Action) {
    switch(action.type) {
        case POST_QUESTION_SUCC: {
            const {question} = action as PostQuestionSucc
            const newQuestionState = adapter.addOne(question, state)
            console.log('pitanje reducer', newQuestionState)
            return newQuestionState
        }
        case GET_ALL_QUESTIONS_SUCC: {
            const {questions} = action as GetAllQuestionsSucc
            const clean = adapter.removeAll(state)
            return adapter.addMany(questions, state)
        }
        case PUT_QUESTION_SUCC: {
            const {question} = action as PutQuestionSucc
            return adapter.updateOne({id: question.id, changes: question}, state)
        }
        case DELETE_QUESTION_SUCC: {
            const {id} = action as DeleteQuestionSucc
            return adapter.removeOne(id, state)
        }
        default: {
            return state
        }
    }   
}

export const selectors = adapter.getSelectors()