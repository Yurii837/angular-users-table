import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { GotTruesPipe } from './pipes/got-trues.pipe';
import { PrepareUserPipe } from './pipes/prepare-user.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// declarations: [AppComponent, DetailGridComponent],

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    GotTruesPipe,
    PrepareUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    HttpClientModule,
    NgbModule
  ],
  // declarations: [AppComponent, DetailGridComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
