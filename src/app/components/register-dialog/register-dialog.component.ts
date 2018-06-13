import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { RegReq } from '../../store/actions';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    public store$: Store<State>
  ) { }

  ngOnInit() {
  }

  handleRegister(ev) {
    ev.preventDefault()
    const username = ev.target.elements.username.value
    const password = ev.target.elements.password.value
    if (username !== "" && password !== "") {
      this.store$.dispatch(new RegReq(username, password))
      this.dialogRef.close()
    } else {
      alert('Unesite username i password')
    }
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
