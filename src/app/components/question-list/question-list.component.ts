import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../model/question';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { selectors as QuestionSelectors} from '../../store/reducers/questions.reducer';
import { GetAllQuestions } from '../../store/actions';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  public questions$: Observable<Question[]>

  constructor(
    private store$: Store<State>
  ) {
    this.questions$ = this.store$.select((state: State) => QuestionSelectors.selectAll(state.questions))
  }

  ngOnInit() {
    this.store$.dispatch(new GetAllQuestions())
  }

}
