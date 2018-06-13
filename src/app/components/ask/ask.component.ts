import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { PostQuestion } from '../../store/actions';
import { Question } from '../../model/question';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  public user$: Observable<User>
  public user: User

  constructor(
    private store$: Store<State>
  ) { 
    this.user$ = this.store$.select(state => state.user)
    this.user$.subscribe(user => this.user = user)
  }

  ngOnInit() {
  }

  handleSubmit(ev) {
    ev.preventDefault()
    const title = ev.target.elements.title.value
    const content = ev.target.elements.content.value
    const tagsString: string = ev.target.elements.tags.value
    if (title !== '' && content !== '') {
      const tags = tagsString.split(' ')
      const newQuestion = new Question(Date.now().toString(),title, content, [], "", 0, tags, this.user.id)
      this.store$.dispatch(new PostQuestion(newQuestion, {...this.user, questions:[...this.user.questions, newQuestion.id]}))
    } else {
      alert('unesite naslov i sadrzaj pitanja')
    }
  }

}
