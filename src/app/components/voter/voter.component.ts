import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  constructor() { }

  @Input()
  public enabled: boolean
  @Input()
  public correct: boolean
  @Input()
  public points: Number

  ngOnInit() {
  }

}
