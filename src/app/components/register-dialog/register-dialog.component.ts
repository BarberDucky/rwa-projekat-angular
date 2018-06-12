import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit() {
  }

  handleRegister(ev) {
    ev.preventDefault()
    this.dialogRef.close()
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
