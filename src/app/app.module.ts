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
import { AgGridContextEditerDemoComponent } from './components/ag-grid-context-editer-demo/ag-grid-context-editer-demo.component';
import { AgGridExportFileDemoComponent } from './components/ag-grid-export-file-demo/ag-grid-export-file-demo.component';
import { AgGridImportDemoComponent } from './components/ag-grid-import-demo/ag-grid-import-demo.component';
import { AgGridCustomerComponmentsDemoComponent } from './components/ag-grid-customer-componments-demo/ag-grid-customer-componments-demo.component';
import { AgGridAddComponmentsDemoComponent } from './components/ag-grid-add-componments-demo/ag-grid-add-componments-demo.component';
import {SquareRendererComponent} from './components/ag-grid-add-componments-demo/square-renderer.component';
import {CubeRendererComponent} from './components/ag-grid-add-componments-demo/cube-renderer-component';
import {ParamsRendererComponent} from './components/ag-grid-add-componments-demo/params-renderer.component';
import {CurrencyRendererComponent} from './components/ag-grid-add-componments-demo/currency-renderer.component';
import {ChildMessageRendererComponment} from "./components/ag-grid-add-componments-demo/child-message-renderer.componment";

@NgModule({
  declarations: [
    AppComponent,
    AgGridColumnsDemoComponent,
    AgGridRowsDemoComponent,
    AgGridClientDataDemoComponent,
    AgGridColumnFilterDemoComponent,
    AgGridContextRanderDemoComponent,
    AgGridContextEditerDemoComponent,
    AgGridExportFileDemoComponent,
    AgGridImportDemoComponent,
    AgGridCustomerComponmentsDemoComponent,
    AgGridAddComponmentsDemoComponent,
    SquareRendererComponent,
    CubeRendererComponent,
    ParamsRendererComponent,
    CurrencyRendererComponent,
    ChildMessageRendererComponment,
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
