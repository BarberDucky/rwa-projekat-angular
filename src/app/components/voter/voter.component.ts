import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../model/question';
import { User } from '../../model/user';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { PutQuestion } from '../../store/actions';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  public selectedQuestion$: Observable<Question>
  public selectedQuestion: Question
  public user$: Observable<User>
  public user: User

  constructor(
    private store$: Store<State>
  ) {
    this.selectedQuestion$ = this.store$.select(state => state.selectedQuestion)
    this.selectedQuestion$.subscribe(question => this.selectedQuestion = question)
    this.user$ = this.store$.select(state => state.user)
    this.user$.subscribe(user => this.user = user)
  }

  @Input()
  public enabled: boolean
  @Input()
  public correct: boolean
  @Input()
  public points: Number
  @Input()
  public id: string
  @Input()
  public poster: string

  ngOnInit() {
  }

  vote(point) {
    let newQuestion = this.selectedQuestion
    if (this.enabled) {
      newQuestion.points += point
    } else {
      newQuestion.answers = newQuestion.answers.map(answer => {
        if (answer.id === this.id) {
          return {...answer, points: answer.points + point}
        } else {
          return answer
        }
      })
    }
    this.store$.dispatch(new PutQuestion(newQuestion))
  }

  choose() {
    let newQuestion = this.selectedQuestion
    newQuestion.answers = newQuestion.answers.map(answer => {
      if(answer.id === this.id) {
        return {...answer, correct: true}
      } else {
        return {...answer, correct: false}
      }
    })
    newQuestion.answered = true;
    this.store$.dispatch(new PutQuestion(newQuestion))
  }
}
