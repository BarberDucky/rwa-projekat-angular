import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import * as types from '../actions.types'
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { User } from "../../model/user";
import { Action } from "@ngrx/store";
import { AuthReq, AuthSucc, AuthFail } from "../actions";
import { UserService} from "../../services/auth.service";

@Injectable() 
export class AuthEffects {
    constructor( 
        private actions$: Actions,
        private UserService: UserService
    ) {}

    @Effect()
    login$ = this.actions$
        .ofType(types.AUTH_REQ)
        .pipe(
            map(info => ({
                    id: (info as AuthReq).username,
                    password: (info as AuthReq).password
            })),
            switchMap(credentials => {
                return this.UserService.getUser(credentials.id, credentials.password)
                    .pipe(map(user =>{
                        alert("successful login")
                        return new AuthSucc(user)}
                    ),
                    catchError(() => {
                        alert('failed to login')
                        return []
                    })
                )
            })
        )
}
