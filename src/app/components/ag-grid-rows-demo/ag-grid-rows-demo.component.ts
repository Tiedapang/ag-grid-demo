import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi, Module} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';

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

  constructor(private gridDataService: GridDataServiceService ) {
    this.columnDefs = [
      {
        field: 'make',
        rowSpan: this.rowSpan,
        sort: 'asc',
      },
      {
        field: 'model',
        width: 90,
      },
      {
        field: 'price',
        comparator: (valueA, valueB, nodeA, nodeB, inInverted) => {
         return valueA - valueB;
        },
      }
    ];
    this.defaultColDef = {
      width: 170,
      sortable: true,
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.rowData = this.gridDataService.getSmallRowDatas();
  }

  rowSpan(params): number {
    return params.data.make === 'Ford' ? 2 : 1;
  }
}
