import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  status = false;
  
 resetUserName(){
    this.userName = '';
  }
  title = 'basics-assignment-2-start';
}
