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
  ForkHeight: number;

  constructor(private gridDataService: GridDataServiceService ) {
    this.ForkHeight = 100;
    this.columnDefs = [
      {
        field: 'make',
        pinnedRowCellRenderer: 'customPinnedRowRenderer',
        pinnedRowCellRendererParams: { style: { color: 'blue' } },
        rowSpan: this.rowSpan,
        sort: 'asc',
        wrapText: true,
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
    this.gridDataService.getSmallRowDatas().subscribe((data) =>{
      data.forEach((dataItem) => {
        dataItem.rowHeight = 200 * Math.random();
      });
      this.rowData = data;
    });
  }

  rowSpan(params): number {
    return params.data.make === 'Ford' ? 2 : 1;
  }

  getRowHeight(params): number{
    this.ForkHeight = 100;
    if (params.data.make === 'Ford'){
      return this.ForkHeight;
    }
    return params.data.rowHeight;
  }

  resetRowHeight(height: number): void{
    this.ForkHeight = height;
    this.gridApi.resetRowHeights();
  }
}
