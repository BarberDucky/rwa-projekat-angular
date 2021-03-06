import { User } from "../model/user";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from './reducers/user.reducer'
import 'rxjs'
import pageReducer from "./reducers/page.reducer";
import questionsReducer, { QuestionsState } from "./reducers/questions.reducer";
import { Question } from "../model/question";
import selectedQuestionReducer from "./reducers/selected-question.reducer";
import listReducer, { listState } from "./reducers/list.reducer";
export interface State {
    user: User,
    page: string,
    questions: QuestionsState,
    selectedQuestion: Question,
    listFormat: listState 
}

export const rootReducer: ActionReducerMap<State> = {
    user: userReducer,
    page: pageReducer,
    questions: questionsReducer,
    selectedQuestion: selectedQuestionReducer,
    listFormat: listReducer
}