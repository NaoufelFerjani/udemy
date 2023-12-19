import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3_Practicing_Directives';
  displayStatus = false
  logList: any = [] ;
  log= 0 ;
  // constructor(){
  //   this.logList = [];
  //   this.logs = 0;

  // }

  changeDisplayDetails(){
    this.displayStatus === true ? this.displayStatus = false : this.displayStatus = true;
    this.log += + 1;
    this.logList.push(this.log);
  }
}
