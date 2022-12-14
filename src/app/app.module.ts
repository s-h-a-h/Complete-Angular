import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './databinding/server.component';
import { ServersComponent } from './databinding-2/servers.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './practise/success/success.component';
import { WarningComponent } from "./practise/warning/warning.component";
import { DbComponent } from "./practise-databinding/db.component";
import { DirectComponent } from './direct/direct.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    DbComponent,
    DirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
