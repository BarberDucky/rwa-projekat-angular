import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../model/question';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { SelectQuestion } from '../../store/actions';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.css']
})
export class QuestionInfoComponent implements OnInit {

  constructor(
    private store$: Store<State>
  ) { }

  @Input() 
  public question: Question

  ngOnInit() {
  }

  select(question) {
    this.store$.dispatch(new SelectQuestion(question))
  }
}
