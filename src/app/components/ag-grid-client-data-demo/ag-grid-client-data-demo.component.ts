import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';

@Component({
  selector: 'app-ag-grid-client-data-demo',
  templateUrl: './ag-grid-client-data-demo.component.html',
  styleUrls: ['./ag-grid-client-data-demo.component.scss']
})
export class AgGridClientDataDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  getRowNodeId: any;
  rowData: [];

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      {
        field: 'make',
      },
      {
        field: 'model',
        width: 90,
      },
      {
        field: 'price',
        filter: 'agNumberColumnFilter'
      }
    ];
    this.defaultColDef = {
      width: 170,
      sortable: true,
      flex: 1,
      editable: true,
      filter: true
    };
    this.getRowNodeId = (data) => {
      return data.id;
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridDataService.getSmallRowDatas().subscribe((data) => {
      this.rowData = data;
    });
  }

  setPriceOnToyota(): void{
    this.gridApi.getRowNode('aa').setDataValue('price',  Math.floor(Math.random() * 10000));
  }

  setDataOnFord(): void{
  }

  updateSort(): void{
    this.gridApi.refreshClientSideRowModel('sort');
  }

  updateFilter(): void{
    this.gridApi.refreshClientSideRowModel('filter');
  }

}
