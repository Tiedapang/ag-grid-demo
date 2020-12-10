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
  pinnedTopRowData: any;
  pinnedBottomRowData: any;

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      { field: 'firstName' },
      { field: 'lastName' },
      { field: 'gender' },
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
    gridDataService.getPersonInfo().subscribe((data) => {
      this.rowData = data;
    });
    this.pinnedTopRowData = this.getPinnedTopData();
    this.pinnedBottomRowData = this.getPinnedBottomData();
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onBtStopEditing(): void{
    this.gridApi.stopEditing();
  }

  onBtStartEditing(key, char, pinned): void{
    this.gridApi.setFocusedCell(0, 'lastName', pinned);
    this.gridApi.startEditingCell({
      rowIndex: 0,
      colKey: 'lastName',
      rowPinned: pinned,
      keyPress: key,
      charPress: char,
    });
  }

  onBtNextCell(): void{
    this.gridApi.tabToNextCell();
  }

  onBtPreviousCell(): void{
    this.gridApi.tabToPreviousCell();
  }

  onBtWhich(): void{
    const cellDefs = this.gridApi.getEditingCells();
    if (cellDefs.length > 0) {
      const cellDef = cellDefs[0];
      console.log(
          'editing cell is: row = ' +
          cellDef.rowIndex +
          ', col = ' +
          cellDef.column.getId() +
          ', floating = ' +
          cellDef.rowPinned
      );
    } else {
      console.log('no cells are editing');
    }
  }

  getPinnedTopData(): any{
    return [
      {
        firstName: '##',
        lastName: '##',
        gender: '##',
        address: '##',
        mood: '##',
        country: '##',
      },
    ];
  }

  getPinnedBottomData(): any{
    return [
      {
        firstName: '##',
        lastName: '##',
        gender: '##',
        address: '##',
        mood: '##',
        country: '##',
      },
    ];
  }
}
