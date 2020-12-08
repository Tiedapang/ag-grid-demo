import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi, Module} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';
import './ag-grid-rows-demo.component.scss';

@Component({
  selector: 'app-ag-grid-rows-demo',
  templateUrl: './ag-grid-rows-demo.component.html',
  styleUrls: ['./ag-grid-rows-demo.component.scss']
})
export class AgGridRowsDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  rowData: any;

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      {
        field: 'make',
        cellStyle: {color: 'red', 'background-color': 'green'}
      },
      {
        field: 'model',
        width: 90,
      },
      {
        field: 'price',
        cellClass: 'my-class-1'
      }
    ];
    this.defaultColDef = {
      width: 170,
      sortable: true,
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridDataService.getSmallRowDatas().subscribe((data) => {
      this.rowData = data;
    });
  }

}
