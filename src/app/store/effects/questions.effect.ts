import {Injectable} from '@angular/core'
import {Effect, Actions} from '@ngrx/effects'
import { QuestionService } from '../../services/question.service';
import { POST_QUESTION, GET_ALL_QUESTIONS, PUT_QUESTION, DELETE_QUESTION } from '../actions.types';
import { map, switchMap } from 'rxjs/operators';
import { PostQuestion, PostQuestionSucc, GetAllQuestions, GetAllQuestionsSucc, PutQuestion, PutQuestionSucc, DeleteQuestion, DeleteQuestionSucc } from '../actions';

@Injectable()
export class QuestionEffects {
    constructor(
        private actions$: Actions,
        private service: QuestionService
    ) {}

    @Effect()
    post$ = this.actions$
        .ofType(POST_QUESTION)
        .pipe(
            map(info => (info as PostQuestion).question),
            switchMap(question => {
                return this.service.postQuestion(question)
                    .pipe(
                        map(question => new PostQuestionSucc(question))
                    )
            })
        )

    @Effect()
    getAll$ = this.actions$
        .ofType(GET_ALL_QUESTIONS)
        .pipe(
            switchMap(() => {
                return this.service.getAllQuestions()
                    .pipe(
                        map(questions => new GetAllQuestionsSucc(questions))
                    )
            })
        )
    
    @Effect()
    put$ = this.actions$
        .ofType(PUT_QUESTION)
        .pipe(
            map(info => (info as PutQuestion).question),
            switchMap(question => {
                return this.service.putQuestion(question)
                    .pipe(
                        map(question => new PutQuestionSucc(question))
                    )
            })
        )

    @Effect()
    delete$ = this.actions$
        .ofType(DELETE_QUESTION)
        .pipe(
            map(info => (info as DeleteQuestion).id),
            switchMap(id => {
                return this.service.deleteQuestion(id)
                    .pipe(
                        map(id => new DeleteQuestionSucc(id))
                    )
            })
        )
}