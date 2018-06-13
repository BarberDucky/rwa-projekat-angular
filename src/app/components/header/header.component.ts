import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import { AuthReq, Logout, UpdatePage, GetAllQuestions, SelectList } from '../../store/actions';
import { User } from '../../model/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<User>
  public user: User

  constructor(
    public loginDialog: MatDialog, 
    public registerDialog: MatDialog,
    private store$: Store<State>
  ) { 
    this.user$ = this.store$.select(state => state.user)
    this.user$.subscribe(user => this.user = user)
  }

  ngOnInit() {
  }

  submitHandler(ev) {
    ev.preventDefault()
    let tags = ev.target.elements.search.value
    if (tags === "") {
      this.store$.dispatch(new SelectList('Sva pitanja', null))
      this.store$.dispatch(new UpdatePage('main'))
      this.store$.dispatch(new GetAllQuestions())
    } else {
      tags = tags.split(" ")
      this.store$.dispatch(new SelectList('Pretraga', tags))
      this.store$.dispatch(new UpdatePage('main'))
      this.store$.dispatch(new GetAllQuestions())
    }
  }
  goToQuestions() {
    this.store$.dispatch(new SelectList('Sva pitanja', null))
    this.store$.dispatch(new GetAllQuestions())
  }
  openLoginDialog() {
    let dialogRef = this.loginDialog.open(LoginDialogComponent)
  }
  openRegisterDialog() {
    let dialogRef = this.registerDialog.open(RegisterDialogComponent)
  }
  goToMyQuestions() {
    this.store$.dispatch(new SelectList('Moja pitanja', this.user.id))
    this.store$.dispatch(new UpdatePage('main'))
    this.store$.dispatch(new GetAllQuestions())
  }
  goToAsk() {
    this.store$.dispatch(new UpdatePage('ask'))
  }
  logout() {
    this.store$.dispatch(new Logout())
  }
}
