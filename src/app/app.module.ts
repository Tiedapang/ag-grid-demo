import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import {AgGridColumnsDemoComponent} from './components/ag-grid-columns-demo/ag-grid-columns-demo.component';
import { AgGridRowsDemoComponent } from './components/ag-grid-rows-demo/ag-grid-rows-demo.component';
import { AgGridClientDataDemoComponent } from './components/ag-grid-client-data-demo/ag-grid-client-data-demo.component';
import { AgGridColumnFilterDemoComponent } from './components/ag-grid-column-filter-demo/ag-grid-column-filter-demo.component';
import { AgGridContextRanderDemoComponent } from './components/ag-grid-context-rander-demo/ag-grid-context-rander-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridColumnsDemoComponent,
    AgGridRowsDemoComponent,
    AgGridClientDataDemoComponent,
    AgGridColumnFilterDemoComponent,
    AgGridContextRanderDemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
