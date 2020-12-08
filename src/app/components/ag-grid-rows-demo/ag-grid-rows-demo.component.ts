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

  priceComparator(data1, data2): number{
    console.log('data1:' + data1);
    console.log('data2:' + data2);
    if (data1 === null && data2 === null) {
      return 0;
    }
    if (data1 === null) {
      return -1;
    }
    if (data2 === null) {
      return 1;
    }
    return data1 - data2;
  }
}
