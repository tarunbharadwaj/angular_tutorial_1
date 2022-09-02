import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutorial-1';

  viewMode = 'smom';

  email = ""

  onKeyUp(){
    console.log(this.email)
  }



}
