import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
}
