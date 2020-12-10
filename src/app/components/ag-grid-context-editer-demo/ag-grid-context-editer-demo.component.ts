import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';

@Component({
  selector: 'app-ag-grid-context-editer-demo',
  templateUrl: './ag-grid-context-editer-demo.component.html',
  styleUrls: ['./ag-grid-context-editer-demo.component.scss']
})
export class AgGridContextEditerDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  rowData: [];
  columnDefs: any;
  defaultColDef: any;
  editType: string;

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      {
        field: 'firstName',
      },
      { field: 'lastName' },
      {
        field: 'gender',
      },
      { field: 'age' },
      { field: 'mood' },
      { field: 'country' },
      {
        field: 'address',
        minWidth: 550,
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 110,
      editable: true,
      resizable: true,
    };
    this.editType = 'fullRow';
    gridDataService.getPersonInfo().subscribe((data) => {
      this.rowData = data;
    });

  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
