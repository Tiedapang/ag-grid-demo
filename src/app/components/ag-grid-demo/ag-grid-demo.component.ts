import {Component, OnInit, ViewChild} from '@angular/core';
import {GridDataServiceService} from '../service/grid-data-service.service';
import {AgGridAngular} from 'ag-grid-angular';
import {withIdentifier} from 'codelyzer/util/astQuery';

@Component({
  selector: 'app-ag-grid-demo',
  templateUrl: './ag-grid-demo.component.html',
  styleUrls: ['./ag-grid-demo.component.scss']
})
export class AgGridDemoComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  constructor(private gridDataService: GridDataServiceService) {
  }
  gridOptions = {
    // columnDefs: [
    //   {headerName: '制造厂', field: 'make', sortable: true, pinned: 'left', width: '150'},
    //   {headerName: '模型', field: 'model', sortable: true},
    //   {headerName: '价格', field: 'price', sortable: true}
    // ],
    columnDefs: [
      {
        headerName: 'Group A',
        children: [
          {headerName: '制造厂', field: 'make'},
          {headerName: '模型', field: 'model'}
        ]
      },
      {headerName: '价格',
        children: [{headerName: '价格', field: 'price', filter: 'agNumberColumnFilter', type: 'numericColumn'}]
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

  // columnDefs = [
  //   {headerName: '制造厂', field: 'make', sortable: true, pinned: 'left', width: '150'},
  //   {headerName: '模型', field: 'model', sortable: true},
  //   {headerName: '价格', field: 'price', sortable: true}
  // ];
  rowData: any;

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
}
