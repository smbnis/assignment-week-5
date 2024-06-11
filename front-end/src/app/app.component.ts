import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: string = 'classes';

  showClasses() {
    this.currentView = 'classes';
  }

  showStudents() {
    this.currentView = 'students';
  }
}
