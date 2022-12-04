import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemAComponent } from './item-a/item-a.component';
import { ItemBComponent } from './item-b/item-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemAComponent,
    ItemBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
