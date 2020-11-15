import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea5';

  constructor(private cookie: CookieService){}
  allMight(){
    this.cookie.set("UserID","ABC")
  }

  allDeku()
  {
    alert(this.cookie.get("UserID"))
  }

  allForOne()
  {
    this.cookie.delete("UserID")
  }


}
