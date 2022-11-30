import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-project';
  selectedLink: String = 'recipe';

  onNavigate(selectedLink: String) {
    this.selectedLink = selectedLink;
  }
}
