import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {SquareRendererComponent} from './square-renderer.component';
import {CubeRendererComponent} from './cube-renderer-component';
import {ParamsRendererComponent} from './params-renderer.component';
import {CurrencyRendererComponent} from './currency-renderer.component';
import {ChildMessageRendererComponment} from './child-message-renderer.componment';

@Component({
  selector: 'app-ag-grid-add-componments-demo',
  templateUrl: './ag-grid-add-componments-demo.component.html',
  styleUrls: ['./ag-grid-add-componments-demo.component.scss']
})
export class AgGridAddComponmentsDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  rowData: [];
  context: any;
  frameworkComponents: any;
  defaultColDef: any;

  constructor() {
    this.columnDefs  = [
      {
        headerName:  'Row',
        field: 'row',
        width: 150,
      },
      {
        headerName: 'Square',
        field: 'value',
        cellRenderer: 'squareRenderer',
        editable: true,
        colId: 'square',
        width: 150
      },
      {
        headerName: 'Cube',
        field: 'value',
        cellRenderer: 'cubeRenderer',
        colId: 'cube',
        width: 150,
      },
      {
        headerName: 'Row Params',
        field: 'row',
        cellRenderer: 'paramsRenderer',
        width: 150,
      },
      {
        headerName: 'Currency (Pipe)',
        field: 'currency',
        cellRenderer: 'currencyRenderer',
        colId: 'currency',
        width: 120,
      },
      {
        headerName: 'Child/Parent',
        field: 'value',
        cellRenderer: 'childMessageRenderer',
        colId: 'params',
        editable: false,
        minWidth: 150,
      },
    ];
    this.rowData = this.createRowData();
    this.context = {componentParent: this};
    this.frameworkComponents = {
      squareRenderer: SquareRendererComponent,
      cubeRenderer: CubeRendererComponent,
      paramsRenderer: ParamsRendererComponent,
      currencyRenderer: CurrencyRendererComponent,
      childMessageRenderer: ChildMessageRendererComponment
    };
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizeable: true,
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  refreshEvenRowsCurrencyData(): void{
    this.gridApi.forEachNode(rowNode => {
      if (rowNode.data.value % 2 === 0) {
        rowNode.setDataValue('currency', rowNode.data.value + Number(Math.random().toFixed(2)));
      }
    });
    this.gridApi.refreshCells({columns: ['currency']});
  }

  createRowData(): any{
    const rowData = [];
    for (let i = 0; i < 15; i++) {
      rowData.push({
        row: 'Row' + i,
        value: i,
        currency: i + Number(Math.random().toFixed(2)),
      });
    }
    return rowData;
  }
}
