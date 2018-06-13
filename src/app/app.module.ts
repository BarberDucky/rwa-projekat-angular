import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import {EffectsModule, Actions} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import 'rxjs'

import {rootReducer} from './store'

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
  MatDialogModule,
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
import { AuthEffects } from './store/effects/auth.effect';
import { UserService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { RegEffects } from './store/effects/reg.effect';
import { QuestionService } from './services/question.service';
import { UserEffects } from './store/effects/user.effect';
import { QuestionEffects } from './store/effects/questions.effect';
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
    MatDialogModule,
    EffectsModule,
    HttpModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([
      AuthEffects, 
      RegEffects,
      UserEffects,
      QuestionEffects
    ])
  ],
  entryComponents: [LoginDialogComponent, RegisterDialogComponent],
  providers: [
    Actions,
    UserService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
