import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {PartialMatchFilterComponent} from "./partial-match-filter.component";

@Component({
  selector: 'app-ag-grid-filter-demo',
  templateUrl: './ag-grid-filter-demo.component.html',
  styleUrls: ['./ag-grid-filter-demo.component.scss']
})
export class AgGridFilterDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  rowData: [];
  frameworkComponents: any;

  constructor() {
    this.columnDefs = [
      { field: 'row' },
      {
        field: 'name',
        filter: 'partialMatchFilter',
        menuTabs: ['filterMenuTab'],
      },
    ];
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
    this.rowData = this.createRowData();
    this.frameworkComponents = { partialMatchFilter: PartialMatchFilterComponent };
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onClicked(): void{
  }

  createRowData(): any {
    return [
      {
        row: 'Row 1',
        name: 'Michael Phelps',
      },
      {
        row: 'Row 2',
        name: 'Natalie Coughlin',
      },
      {
        row: 'Row 3',
        name: 'Aleksey Nemov',
      },
      {
        row: 'Row 4',
        name: 'Alicia Coutts',
      },
      {
        row: 'Row 5',
        name: 'Missy Franklin',
      },
      {
        row: 'Row 6',
        name: 'Ryan Lochte',
      },
      {
        row: 'Row 7',
        name: 'Allison Schmitt',
      },
      {
        row: 'Row 8',
        name: 'Natalie Coughlin',
      },
      {
        row: 'Row 9',
        name: 'Ian Thorpe',
      },
      {
        row: 'Row 10',
        name: 'Bob Mill',
      },
      {
        row: 'Row 11',
        name: 'Willy Walsh',
      },
      {
        row: 'Row 12',
        name: 'Sarah McCoy',
      },
      {
        row: 'Row 13',
        name: 'Jane Jack',
      },
      {
        row: 'Row 14',
        name: 'Tina Wills',
      },
    ];
  }

}
