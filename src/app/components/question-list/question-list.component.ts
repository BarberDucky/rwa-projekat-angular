import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../model/question';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { selectors as QuestionSelectors} from '../../store/reducers/questions.reducer';
import { GetAllQuestions } from '../../store/actions';
import { listState } from '../../store/reducers/list.reducer';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  public questions$: Observable<Question[]>
  public list$: Observable<listState>
  public list: listState
  constructor(
    private store$: Store<State>
  ) {
    this.questions$ = this.store$.select((state: State) => QuestionSelectors.selectAll(state.questions))
    this.list$ = this.store$.select(state => state.listFormat)
    this.list$.subscribe(list => this.list = list)
  }

  ngOnInit() {
    this.store$.dispatch(new GetAllQuestions())
  }

  filterList(question: Question) {
    if(this.list.title === 'Pretraga') {
      return Boolean(question.tags.filter(value => -1 !== this.list.criteria.indexOf(value)).length)
    } else if (this.list.title === 'Moja pitanja'){
      return question.poster === this.list.criteria
    } else if (this.list.title === 'Pretraga po oznaci'){
      return question.tags.indexOf(this.list.criteria) !== -1
    } else {
      return true
    }
  }

}
