import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input()
  public points: Number
  @Input()
  public isQuestion: boolean
  @Input()
  public poster: string
  @Input()
  public content: string
  @Input()
  public correct: boolean
  ngOnInit() {
  }

}
