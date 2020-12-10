import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ag-grid-import-demo',
  templateUrl: './ag-grid-import-demo.component.html',
  styleUrls: ['./ag-grid-import-demo.component.scss']
})
export class AgGridImportDemoComponent implements OnInit {

  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  rowData: [];

  constructor() {
    this.columnDefs = [
      { field: 'athlete', minWidth: 180 },
      { field: 'age' },
      { field: 'country', minWidth: 150 },
      { field: 'year'},
      { field: 'date', minWidth: 130 },
      { field: 'sport', minWidth: 100},
      { field: 'gold'},
      { field: 'silver'},
      { field: 'bronze'},
      { field: 'total'}
    ];
    this.defaultColDef = {
      resizable: true,
      minWidth: 80,
      flex: 1
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): any{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = [];
  }
  makeRequest(method, url, sucess, error): void{
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true);
    httpRequest.responseType = 'arraybuffer';

    httpRequest.open(method, url);
    httpRequest.onload =  () => {
      sucess(httpRequest.response);
    };
    httpRequest.onerror =  () => {
      error(httpRequest.response);
    };
    httpRequest.send();
  }

  convertDataToWorkbook(data): any{
    const newData = new Uint8Array(data);
    const arr = new Array();
    for (let i = 0; i !== data.length; i++) {
      arr[i] = String.fromCharCode(data[i]);
    }
    return XLSX.read(arr.join(''), {type: 'binary'});
  }

  populateGrid(workbook): any{
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    const columns = {
      A: 'athlete',
      B: 'age',
      C: 'country',
      D: 'year',
      E: 'date',
      F: 'sport',
      G: 'gold',
      H: 'silver',
      I: 'bronze',
      J: 'total'
    };

    const rowData = [];
    let rowIndex = 2;

    while (worksheet['A' + rowIndex]) {
      const row = {};
      Object.keys(columns).forEach((column) => {
        row[columns[column]] = worksheet[column + rowIndex].w;
      });

      rowData.push(row);
      rowIndex ++;
    }
    this.gridApi.setRowData(rowData);
  }

  importExcel(): void{
    this.makeRequest('GET', '../../../assets/OlymicData.xlsx', (data) => {
      const workbook = this.convertDataToWorkbook(data);
      this.populateGrid(workbook);
    }, (error) => {
      throw error;
    });
  }
}
