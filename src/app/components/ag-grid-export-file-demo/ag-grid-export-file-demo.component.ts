import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';

@Component({
  selector: 'app-ag-grid-export-file-demo',
  templateUrl: './ag-grid-export-file-demo.component.html',
  styleUrls: ['./ag-grid-export-file-demo.component.scss']
})
export class AgGridExportFileDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  autoGroupColumnDef: any;
  rowData: [];

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      { field: 'athlete'},
      { field: 'age'},
      { field: 'country'},
      { field: 'year'},
      { field: 'date'},
      { field: 'sport'},
      { field: 'gold'},
      { field: 'silver'},
      { field: 'bronze'},
      { field: 'total'},
    ];
    gridDataService.getBigNumbersOfRowDatas().subscribe(data => this.rowData = data );
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onBtnExportDataAsCsv(): void{
    const params = {
      allColumns: true,
      columnKeys: ['athlete', 'age'],
      customHeader: '这是导出文件的头信息',
      customFooter: '这是导出文件的尾信息',
      fileName: '奥运会运动员成绩导出测试'
    };
    this.gridApi.exportDataAsCsv(params);
  }

}
