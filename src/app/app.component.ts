import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newProject';
  public message: string = '';


  showMessage(option: string) {
    if (option === 'First') {
      this.message = 'You clicked on Option 1';
    } else if (option === 'Second') {
      this.message = 'You clicked on Option 2';
    }
   }
  }
