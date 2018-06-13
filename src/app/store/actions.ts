import { Action } from '@ngrx/store'
import * as types from './actions.types'
import { User } from '../model/user';
import { Question } from '../model/question';

export class AuthReq implements Action {
    type = types.AUTH_REQ
    constructor(public username: string, public password: string) {
    }
}

export class RegReq implements Action {
    type = types.REG_REQ
    constructor(public username: string, public password: string) {
    }
}

export class AuthSucc implements Action {
    type = types.AUTH_SUCC
    user: User
    constructor(user: User) {
        this.user = user
    }
}

export class RegSucc implements Action {
    type = types.REG_SUCC
    constructor() {
    }
}

export class AuthFail implements Action {
    type = types.AUTH_FAIL
    constructor() {
    }
}

export class UpdatePage implements Action {
    type = types.UPDATE_PAGE
    constructor(public page: string) { }
}

export class Logout implements Action {
    type = types.LOGOUT
    constructor() { }
}

export class PostQuestion implements Action {
    type = types.POST_QUESTION
    constructor(public question: Question, public user: User) { }
}

export class PutQuestion implements Action {
    type = types.PUT_QUESTION
    constructor(public question: Question) { }
}

export class DeleteQuestion implements Action {
    type = types.DELETE_QUESTION
    constructor(public id: string, public user: User) { }
}

export class PostQuestionSucc implements Action {
    type = types.POST_QUESTION_SUCC
    constructor(public question: Question) { }
}

export class PutQuestionSucc implements Action {
    type = types.PUT_QUESTION_SUCC
    constructor(public question: Question) { }
}

export class DeleteQuestionSucc implements Action {
    type = types.DELETE_QUESTION_SUCC
    constructor(public id: string) { }
}

export class UpdateUser implements Action {
    type = types.UPDATE_USER
    constructor(public user: User) { }
}

export class GetAllQuestions implements Action {
    type = types.GET_ALL_QUESTIONS
    constructor() { }
}

export class GetAllQuestionsSucc implements Action {
    type = types.GET_ALL_QUESTIONS_SUCC
    constructor(public questions: Question[]) { }
}

export class SelectQuestion implements Action {
    type = types.SELECT_QUESTION
    constructor(public question: Question) { }
}

export class DeselectQuestion implements Action {
    type = types.DESELECT_QUESTION
    constructor() { }
} 

export class SelectList implements Action {
    type = types.SELECT_LIST
    constructor(public title: string, public criteria: any) { }
}