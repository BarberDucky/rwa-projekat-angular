import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {

  constructor() { }

  @Input()
  public tags: string[]

  ngOnInit() {
  }

}
