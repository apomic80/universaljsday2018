import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';

import { NgxElectronModule } from 'ngx-electron';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule, NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
