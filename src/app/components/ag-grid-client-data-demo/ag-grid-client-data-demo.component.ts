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
  autoGroupColumnDef: any;
  groupDefaultExpanded: any;
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
    this.gridDataService.getSmallRowDatas().subscribe((data) => {
      this.rowData = data;
    });
  }

  onBtForEachNode(): void{
    console.log('### api.forEachNode() ###');
    this.gridApi.forEachNode(this.printNode);
  }

  onBtForEachNodeAfterFilter(): void{
    console.log('### api.forEachNodeAfterFilter() ###');
    this.gridApi.forEachNodeAfterFilter(this.printNode);
  }

  onBtForEachNodeAfterFilterAndSort(): void{
  }

  onBtForEachLeafNode(): void{
  }

  printNode(node, index): void{
    console.log(`${index}->data: ${node.data.make},${node.data.price}`);
  }
}
