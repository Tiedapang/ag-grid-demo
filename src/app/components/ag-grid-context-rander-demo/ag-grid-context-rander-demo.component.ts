import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';

@Component({
  selector: 'app-ag-grid-context-rander-demo',
  templateUrl: './ag-grid-context-rander-demo.component.html',
  styleUrls: ['./ag-grid-context-rander-demo.component.scss']
})
export class AgGridContextRanderDemoComponent implements OnInit {

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      { field: '1' },
      { field: '2' },
      { field: '3' },
      { field: '4' },
      { field: '5' },
      { field: '6' },
      { field: '7' },
      { field: '8' },
      { field: '9' },
      { field: '10' },
      { field: '11' },
      { field: '12' },
      { field: '13' },
      { field: '14' },
      { field: '15' },
      { field: '16' },
      { field: '17' },
      { field: '18' },
      { field: '19' },
      { field: '20' },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 80,
      cellRenderer: this.showOrderCellRenderer,
    };
    this.rowData = this.getRowData();
    this.rowSelection = 'single';
    this.rowBuffer = 0;
    this.count = 0;
  }
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  rowData: [];
  rowSelection: any;
  rowBuffer: any;
  count: number;

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  showOrderCellRenderer(): any{
    const eGui = document.createElement('div');
    eGui.innerHTML = String(Math.random() * 100);
    const start = Number(new Date());
    while (Number(new Date()) - start < 15){}
    return eGui;
  }
  getRowData(): any{
    return Array.apply(null, Array(1000));
  }
}
