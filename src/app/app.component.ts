import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen = false;

  constructor() { }

  onNavClick(isOpen: boolean) {
    this.isOpen = isOpen;
    // isOpen ? this.isOpen : this.isClosed;
  }
}
