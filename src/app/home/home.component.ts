import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  widgets: String[];

  constructor() { }

  ngOnInit() {
    this.widgets = [
      'widget number 1',
      'widget number 2',
      'widget number 3',
      'widget number 4',
      'widget number 5'
    ];
  }

}
