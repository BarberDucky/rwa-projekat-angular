import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { UpdatePage, GetAllQuestions, SelectList } from '../../store/actions';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {

  constructor(private store$: Store<State>) { }

  @Input()
  public tags: string[]

  ngOnInit() {
  }

  searchByTag(tag) {
    this.store$.dispatch(new SelectList('Pretraga po oznaci', tag))
    this.store$.dispatch(new UpdatePage('main'))
    this.store$.dispatch(new GetAllQuestions())
  }
}
