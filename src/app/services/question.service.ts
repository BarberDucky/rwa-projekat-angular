import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { Question } from '../model/question';
import { map } from 'rxjs/operators';

@Injectable()
export class QuestionService {
    private API_PATH = 'http://localhost:3000/'

    constructor(private http: Http) {}

    postQuestion(question: Question): Observable<Question> {
        console.log('pitanje za post', question)
        return this.http.post(`${this.API_PATH}questions`, question)
            .pipe(
                map(() => question)
            )
    }

    getAllQuestions(): Observable<Question[]> {
        return this.http.get(`${this.API_PATH}questions`)
            .pipe(
                map(res => res.json() || [])
            )
    }

    putQuestion(question: Question): Observable<Question> {
        return this.http.put(`${this.API_PATH}questions/${question.id}`, question)
            .pipe(
                map(() => question)
            )
    }
}