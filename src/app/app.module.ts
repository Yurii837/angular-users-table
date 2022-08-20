import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// declarations: [AppComponent, DetailGridComponent],

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    HttpClientModule
  ],
  // declarations: [AppComponent, DetailGridComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
