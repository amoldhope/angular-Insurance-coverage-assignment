import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverageComponent } from './coverage/coverage.component';
import { AddOnComponent } from './add-on/add-on.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverageComponent,
    AddOnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
