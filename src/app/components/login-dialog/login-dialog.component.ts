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
    const username = ev.target.elements.username.value
    const password = ev.target.elements.password.value
    if (username !== "" && password !== "") {
      this.store$.dispatch(new AuthReq(username, password))
      this.dialogRef.close()
    } else {
      alert('Unesite username i password')
    }
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
