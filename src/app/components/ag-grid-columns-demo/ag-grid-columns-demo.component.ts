import {Component, OnInit, ViewChild} from '@angular/core';
import {GridDataServiceService} from '../service/grid-data-service.service';
import {AgGridAngular} from 'ag-grid-angular';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {ColumnApi, GridApi} from 'ag-grid-community';

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
    console.log('rowData:', this.rowData);
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.rowData = this.gridDataService.getSmallRowDatas();
  }

  getColumnDefs(): any{
    return  [
      {
        headerName: '产品信息',
        children: [
          {headerName: '制造厂', field: 'make',  width: 150, suppressSizeToFit: true},
          {headerName: '模型', field: 'model', columnGroupShow: 'open'},
        ]
      },
      {
        headerName: '价格详情',
        children: [
          {headerName: '价格', field: 'price', columnGroupShow: 'closed'}
        ]
      }
    ];
  }

  setHeaderNames(): void{
    this.columnDefs.forEach((coldef, index) => {
      coldef.headerName = 'C' + index;
    });
    this.gridApi.setColumnDefs(this.columnDefs);
  }

  removeHeaderNames(): void{
    this.columnDefs.forEach((coldef, index) => {
      coldef.headerName = undefined;
    });
    this.gridApi.setColumnDefs(this.columnDefs);
  }

  setValueFormatters(): void{
    this.columnDefs.forEach(coldef => {
      coldef.valueFormatter = (params) => {
        return '[' + params + ']';
      };
    });
    this.gridApi.setColumnDefs(this.columnDefs);
    this.gridApi.refreshCells({force: true});
  }

  removeValueFormatters(): void{
    this.columnDefs.forEach((coldef) => {
      coldef.valueFormatter  = undefined;
    });
    this.gridApi.setColumnDefs(this.columnDefs);
    this.gridApi.refreshCells({force: true});
  }
}
