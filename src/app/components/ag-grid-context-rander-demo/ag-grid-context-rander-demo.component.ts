import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';

@Component({
  selector: 'app-ag-grid-context-rander-demo',
  templateUrl: './ag-grid-context-rander-demo.component.html',
  styleUrls: ['./ag-grid-context-rander-demo.component.scss']
})
export class AgGridContextRanderDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  rowData: [];

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      {
        headerName: '#',
        maxWidth: 100,
        valueGetter: this.hashValueGetter,
      },
      { field: 'a' },
      { field: 'b' },
      {
        headerName: 'A + B',
        colId: 'a&b',
        valueGetter: this.abValueGetter,
      },
      {
        headerName: 'A * 1000',
        minWidth: 95,
        valueGetter: this.a1000ValueGetter,
      },
      {
        headerName: 'B * 137',
        minWidth: 90,
        valueGetter: this.b137ValueGetter,
      },
      {
        headerName: 'Random',
        minWidth: 90,
        valueGetter: this.randomValueGetter,
      },
      {
        headerName: 'Chain',
        valueGetter: this.chainValueGetter,
      },
      {
        headerName: 'Const',
        minWidth: 85,
        valueGetter: this.constValueGetter,
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 75,
    };
    this.rowData = this.createRowData();
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  hashValueGetter(params): any{
    return params.node.rowIndex;
  }

  abValueGetter(params): any{
    return params.data.a + params.data.b;
  }

  a1000ValueGetter(params): any{
    return params.data.a * 100;
  }

  b137ValueGetter(params): any{
    return params.data.b * 137;
  }

  randomValueGetter(params): any{
    return Math.floor(Math.random() * 1000);
  }

  chainValueGetter(params): number{
    return params.getValue('a&b');
  }

  constValueGetter(params): number{
    return 999;
  }

  createRowData(): any{
    const rowData = [];
    for (let i = 0; i < 100; i++){
      rowData.push({
        a: Math.floor(i % 4),
        b: Math.floor(i % 7),
      });
    }
    return rowData;
  }
}
