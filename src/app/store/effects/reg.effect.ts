import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import * as types from '../actions.types'
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { User } from "../../model/user";
import { Action } from "@ngrx/store";
import { AuthReq, AuthSucc, AuthFail, RegReq, RegSucc } from "../actions";
import { UserService} from "../../services/auth.service";

@Injectable() 
export class RegEffects {
    constructor( 
        private actions$: Actions,
        private UserService: UserService
    ) {}

    @Effect()
    register$ = this.actions$
        .ofType(types.REG_REQ)
        .pipe(
            map(info => ({
                    id: (info as RegReq).username,
                    password: (info as RegReq).password
            })),
            switchMap(credentials => {
                return this.UserService.postUser(credentials.id, credentials.password)
                    .pipe(map(user =>{
                        alert("successful registration")
                        return new RegSucc()}
                    ),
                    catchError(() => {
                        alert('fail to register')
                        return []
                    })
                )
            })
        )
}
