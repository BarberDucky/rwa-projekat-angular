import {Action} from '@ngrx/store'
import * as types from './actions.types'
import { User } from '../model/user';

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

export class AuthFail implements Action {
    type = types.AUTH_FAIL
    constructor() {
    }
}

export type Actions = AuthReq 
 | RegReq
 | AuthSucc