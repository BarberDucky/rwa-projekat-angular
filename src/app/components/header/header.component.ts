import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { AuthReq } from '../../store/actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public loginDialog: MatDialog, 
    public registerDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  submitHandler(ev) {
    ev.preventDefault()
    if (ev.target.elements.search.value === "") {
      alert("Unesite ključne reči")
    }
    console.log(ev.target.elements.search.value)
  }
  goToQuestions() {
    console.log('go to questions')
  }
  openLoginDialog() {
    let dialogRef = this.loginDialog.open(LoginDialogComponent)
  }
  openRegisterDialog() {
    let dialogRef = this.registerDialog.open(RegisterDialogComponent)
  }
}
