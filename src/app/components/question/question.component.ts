import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../model/question';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { Answer } from '../../model/answer';
import { User } from '../../model/user';
import { PutQuestion } from '../../store/actions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

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

  ngOnInit() {
  }

  handleSubmit(ev) {
    ev.preventDefault()
    if (!this.user) {
      alert('Morate se prvo ulogovati')
    } else {
      const reply = ev.target.elements.reply.value
      if (reply !== "") {
        let newQuestion = this.selectedQuestion 
        newQuestion.answers = [...this.selectedQuestion.answers, new Answer(Date.now().toString() ,reply, 0, this.user.id, false)]
        this.store$.dispatch(new PutQuestion(newQuestion))
      } else {
        alert('Napišite odgovor')
      }
    }
  }
}
