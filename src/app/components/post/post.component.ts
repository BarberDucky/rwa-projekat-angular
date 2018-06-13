import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../model/question';
import { User } from '../../model/user';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { PutQuestion, DeleteQuestion } from '../../store/actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

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
  public id: string
  @Input()
  public points: Number
  @Input()
  public isQuestion: boolean
  @Input()
  public poster: string
  @Input()
  public content: string
  @Input()
  public correct: boolean

  ngOnInit() {
  }

  delete() {
    if(!this.isQuestion){
      let newQuestion = this.selectedQuestion
      newQuestion.answers = newQuestion.answers.filter(answer => answer.id !== this.id)
      if (!newQuestion.answers.find(answer => answer.correct === true)) {
        newQuestion.answered = false
      }
      this.store$.dispatch(new PutQuestion(newQuestion))
    } else {
      this.store$.dispatch(new DeleteQuestion(this.selectedQuestion.id, this.user))
    }
    
  }

}
