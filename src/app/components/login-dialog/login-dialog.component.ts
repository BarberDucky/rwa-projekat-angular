import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material'
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { AuthReq } from '../../store/actions';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private store$: Store<State>
  ) { }

  ngOnInit() {
  }

  handleLogin(ev) {
    ev.preventDefault()
    this.store$.dispatch(new AuthReq(ev.target.elements.username.value, ev.target.elements.password.value))

    this.dialogRef.close()
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
