import {Component, OnInit, ViewChild} from '@angular/core';
import {GridDataServiceService} from '../service/grid-data-service.service';
import {AgGridAngular} from 'ag-grid-angular';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {ColumnApi, GridApi} from "ag-grid-community";

@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-columns-demo.component.html',
  styleUrls: ['./ag-grid-columns-demo.component.scss']
})
export class AgGridColumnsDemoComponent implements OnInit {
  constructor(private gridDataService: GridDataServiceService) {
  }
  @ViewChild('agGrid') agGrid: AgGridAngular;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  gridOptions = {
    columnDefs: [
      {
        headerName: 'Group A',
        children: [
          {headerName: '制造厂', field: 'make'},
          {headerName: '模型', field: 'model'}
        ]
      },
      {headerName: '价格',
        children: [{headerName: '价格', field: 'price', filter: 'agNumberColumnFilter'}]
      }
    ],
    defaultColDef: {
      width: 150,
      editable: true,
      filter: 'agTextColumnFilter',
      sortable: true,
      type: 'leftAligned',
    }
  };

  rowData: any;
  newColumnDefs  =  [
    {headerName: '制造厂', field: 'make'},
    {headerName: '模型', field: 'model'},
    {headerName: '价格', field: 'price'}];

  ngOnInit(): void {
    this.rowData = this.gridDataService.getSmallRowDatas();
  }
  valueForMatter(item): string{
    return `¥${item}`;
  }
  getSelectedRows(): void{
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    const selectedDataStringPresentation = selectedData.map(node => node.make + ', ' + node.model);

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
  onBtExcludeMedalColumns(): void{
    this.gridApi.setColumnDefs(this.newColumnDefs);
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onBtIncludeMedalColumns(): void{
    this.gridApi.setColumnDefs(this.gridOptions.columnDefs);
  }
}
