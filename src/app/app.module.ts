import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  MatMenuModule, 
  MatButtonModule, 
  MatFormFieldModule,
  MatIconModule, 
  MatToolbarModule, 
  MatDividerModule,
  MatChipsModule
} from '@angular/material';
import { QuestionInfoComponent } from './components/question-info/question-info.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { VoterComponent } from './components/voter/voter.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionInfoComponent,
    QuestionListComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatMenuModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatToolbarModule,
    MatDividerModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
