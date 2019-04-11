import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
   declarations: [
      AppComponent,
      ExpansionComponent,
      PanelComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
