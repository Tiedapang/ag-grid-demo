import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {MoodRendererComponent} from './mood-renderer.component';
import {MoodEditorComponent} from './mood-editor.component';
import {NumericEditorComponent} from "./numeric-editor.component";

@Component({
  selector: 'app-ag-grid-cell-editor-demo',
  templateUrl: './ag-grid-cell-editor-demo.component.html',
  styleUrls: ['./ag-grid-cell-editor-demo.component.scss']
})
export class AgGridCellEditorDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  rowData: any;
  frameworkComponents: any;
  defaultColDef: any;

  constructor() {
    this.columnDefs = [
      {
        field: 'name',
        width: 300,
        editable: true,
      },
      {
        field: 'mood',
        cellRenderer: 'moodRenderer',
        cellEditor: 'moodEditor',
        editable: true,
        width: 300,
      },
      {
        headerName: 'Numeric',
        field: 'number',
        cellEditor: 'numericEditor',
        editable: true,
        width: 280,
      },
    ];
    this.rowData = this.createRowData();
    this.frameworkComponents = {
      moodRenderer: MoodRendererComponent,
      moodEditor: MoodEditorComponent,
      numericEditor: NumericEditorComponent,
    };
    this.defaultColDef = {
      editable: true,
      sortable: true,
      minWidth: 100,
      filter: true,
      resizable: true
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  createRowData(): any{
    return [
      {
        name: 'Bob',
        mood: 'Happy',
        number: 10,
      },
      {
        name: 'Harry',
        mood: 'Sad',
        number: 3,
      },
      {
        name: 'Sally',
        mood: 'Happy',
        number: 20,
      },
      {
        name: 'Mary',
        mood: 'Sad',
        number: 5,
      },
      {
        name: 'John',
        mood: 'Happy',
        number: 15,
      },
      {
        name: 'Jack',
        mood: 'Happy',
        number: 25,
      },
      {
        name: 'Sue',
        mood: 'Sad',
        number: 43,
      },
      {
        name: 'Sean',
        mood: 'Sad',
        number: 1335,
      },
      {
        name: 'Niall',
        mood: 'Happy',
        number: 2,
      },
      {
        name: 'Alberto',
        mood: 'Happy',
        number: 123,
      },
      {
        name: 'Fred',
        mood: 'Sad',
        number: 532,
      },
      {
        name: 'Jenny',
        mood: 'Happy',
        number: 34,
      },
      {
        name: 'Larry',
        mood: 'Happy',
        number: 13,
      },
    ];
  }
}
