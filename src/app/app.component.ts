import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Store } from '@ngrx/store';
import { State } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public user$: Observable<User>
  public user: User

  public page$: Observable<string>
  public page: string

  constructor(
    private store$: Store<State>
  ) {
    this.user$ = this.store$.select(state => state.user)
    this.user$.subscribe(user => this.user = user)
    this.page$ = this.store$.select(state => state.page)
    this.page$.subscribe(page => this.page = page)
    this.page = 'main'
  }
}
