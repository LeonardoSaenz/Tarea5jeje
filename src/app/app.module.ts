import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule,HttpClientModule],
  providers: [CookieService,freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
