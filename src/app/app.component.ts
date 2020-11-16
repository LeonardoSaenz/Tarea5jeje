import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { freeApiService } from './services/freeapi.service'
import { Comments } from './classes/comments'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea5';


  constructor(private cookie: CookieService,
              private _freeApiService:freeApiService,
              
  ){}

  lstcomments:Comments[] | undefined
  

  ngOnInit()
  {
    this._freeApiService.getcomments()
    .subscribe(
      data =>
      {
        this.lstcomments = data;
      }
    )
  }

  allMight(){
    this.cookie.set("Prueba","ABC")
  }

  allDeku()
  {
      alert("ID: "+this.cookie.get("UserId"))
      alert("Email: "+this.cookie.get("UserEmail"))
      alert("UserPostName: "+this.cookie.get("UserPostName"))
      alert("Body: "+this.cookie.get("UserBody"))
  }

  allForOne()
  {
    this.cookie.deleteAll()
  }

  MidoriyaShonen(com:any)
  {
    this.cookie.set("UserEmail",com.email)
    this.cookie.set("UserId",com.id)
    this.cookie.set("UserPostName",com.name)
    this.cookie.set("UserBody",com.body)
  }

  

}
