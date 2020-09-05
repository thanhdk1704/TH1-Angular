import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { B5Component } from './b5/b5.component';
import { VdComponent } from './vd/vd.component';
import { B2Component } from './b2/b2.component';
import { B1Component } from './b1/b1.component';
import { B3Component } from './b3/b3.component';
import { B4Component } from './b4/b4.component';
import { B6Component } from './b6/b6.component';
import { B7Component } from './b7/b7.component';



@NgModule({
  declarations: [
    AppComponent,
    B1Component,
    B5Component,
    VdComponent,
    B2Component,
    B3Component,
    B4Component,
    B6Component,
    B7Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
