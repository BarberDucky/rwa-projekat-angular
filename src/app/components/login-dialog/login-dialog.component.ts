import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }

  handleLogin(ev) {
    ev.preventDefault()
    this.dialogRef.close()
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
