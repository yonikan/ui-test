import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  listItems: String[];
  itemsNumber: Number;

  constructor() { }

  ngOnInit() {
    this.listItems = [
      'Item number 1',
      'Item number 2',
      'Item number 3',
      'Item number 4'
    ];

    this.itemsNumber = 3;
  }

}
