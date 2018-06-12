import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  MatMenuModule, 
  MatButtonModule, 
  MatFormFieldModule,
  MatInputModule,
  MatIconModule, 
  MatToolbarModule, 
  MatDividerModule,
  MatChipsModule,
  MatDialogModule
} from '@angular/material';
import { QuestionInfoComponent } from './components/question-info/question-info.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { VoterComponent } from './components/voter/voter.component';
import { QuestionComponent } from './components/question/question.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { PostComponent } from './components/post/post.component';
import { AskComponent } from './components/ask/ask.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionInfoComponent,
    QuestionListComponent,
    VoterComponent,
    QuestionComponent,
    ChipListComponent,
    PostComponent,
    AskComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatMenuModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule
  ],
  entryComponents: [LoginDialogComponent, RegisterDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
