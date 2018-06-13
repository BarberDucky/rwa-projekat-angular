import {Injectable} from '@angular/core'
import {Effect, Actions} from '@ngrx/effects'
import { UserService } from '../../services/auth.service';
import { POST_QUESTION } from '../actions.types';
import { PostQuestion, PostQuestionSucc, UpdateUser } from '../actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private service: UserService
    ) {}

    @Effect()
    put$ = this.actions$
        .ofType(POST_QUESTION)
        .pipe(
            map(info => (info as PostQuestion).user),
            switchMap(user => {
                return this.service.putUser(user)
                    .pipe(
                        map(user => new UpdateUser(user))
                    )
            })
        )
}