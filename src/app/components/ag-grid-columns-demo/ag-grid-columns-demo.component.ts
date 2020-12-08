import {Component, OnInit, ViewChild} from '@angular/core';
import {GridDataServiceService} from '../service/grid-data-service.service';
import {ColumnApi, GridApi} from 'ag-grid-community';
import './ag-grid-columns-demo.component.scss';

@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-columns-demo.component.html',
  styleUrls: ['./ag-grid-columns-demo.component.scss']
})
export class AgGridColumnsDemoComponent implements OnInit {
  constructor(private gridDataService: GridDataServiceService) {
  }
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  rowData: any;
  columnDefs: any;
  defaultColDef: any;

  ngOnInit(): void {
    this.columnDefs = this.getColumnDefs();
    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true,
    };
    this.rowData = this.gridDataService.getSmallRowDatas();
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getColumnDefs(): any{
    return  [
      {
        headerName: '产品信息',
        headerClass: 'my-css-class',
        children: [
          {headerName: '制造厂', field: 'make', width: 150, suppressSizeToFit: true},
          {headerName: '模型', field: 'model'},
        ]
      },
      {
        headerName: '价格详情',
        children: [
          {headerName: '价格', field: 'price', resizable: false}
        ]
      }
    ];
  }

  onMedalsFirst(): void{
    this.gridColumnApi.moveColumns(['price'], 0);
  }

  onMedalsLast(): void{
    this.gridColumnApi.moveColumns(['price'], 2);
  }

  onCountryFirst(): void{
    this.gridColumnApi.moveColumn('price', 0);
  }

  onSwapFirstTwo(): void{
    this.gridColumnApi.moveColumnByIndex(0, 1);
  }
}
