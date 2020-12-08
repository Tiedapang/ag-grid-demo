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
  rowSelection: any;
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
    this.rowSelection = 'multiple';
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

  getRowData(): void{
    const rowTempData = [];
    this.gridApi.forEachNode((node) => {
      return rowTempData.push(node.data);
    });
  }

  clearData(): void{
    this.gridApi.setRowData([]);
  }

  addItems(): void{
    const newItem = this.createNewData();
    this.gridApi.applyTransaction({
      add: newItem
    });
  }

  updateItems(): void{
    const updateItems = [
      {
        make: 'Porsche',
        model: 'Boxter',
        price: 72000
      }];
    this.gridApi.applyTransaction({update:  updateItems});
  }

  onRemoveSelected(): void{
    const selectData = this.gridApi.getSelectedRows();
    this.gridApi.applyTransaction(
        {remove: selectData}
    );
  }

  createNewData(): any{
    return [{
      make: 'Porsche',
      model: 'Boxter',
      price: 72000
    }];
  }
}
