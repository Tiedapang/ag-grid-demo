import { Component, OnInit } from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {GridDataServiceService} from "../service/grid-data-service.service";

@Component({
  selector: 'app-ag-grid-outside-filter-demo',
  templateUrl: './ag-grid-outside-filter-demo.component.html',
  styleUrls: ['./ag-grid-outside-filter-demo.component.scss']
})
export class AgGridOutsideFilterDemoComponent implements OnInit {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columnDefs: any;
  defaultColDef: any;
  rowData: [];
  dateFilterParams = {
    comparator(filterLocalDateAtMidnight, cellValue): any {
      const cellDate = this.asDate(cellValue);
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
  };
ageType = 'everyone';

  constructor(private gridDataService: GridDataServiceService) {
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 180,
      },
      {
        field: 'age',
        filter: 'agNumberColumnFilter',
        maxWidth: 80,
      },
      { field: 'country' },
      {
        field: 'year',
        maxWidth: 90,
      },
      {
        field: 'date',
        filter: 'agDateColumnFilter',
        filterParams: this.dateFilterParams,
      },
      {
        field: 'gold',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'silver',
        filter: 'agNumberColumnFilter',
      },
      {
        field: 'bronze',
        filter: 'agNumberColumnFilter',
      },
    ];

    this.defaultColDef = {
      flex: 1,
      minWidth: 120,
      filter: true,
    };

    this.ageType = 'everyone';
  }

  ngOnInit(): void {
  }

  onGridReady(params: any): void{
    this.gridApi = params.api;
    this.gridColumnApi  = params.columnApi;
    this.gridDataService.getBigNumbersOfRowDatas().subscribe((data) => {
      this.rowData = data;
    });
  }
  asDate(dateAsString): any{
    const splitFields = dateAsString.split('/');
    return new Date(splitFields[2], splitFields[1], splitFields[0]);
  }

  externalFilterChanged(newValue: string): void{
    console.log('newValue:' + newValue);
    this.ageType = newValue;
    console.log('this.ageType:' + this.ageType);
    this.gridApi.onFilterChanged();
  }

  isExternalFilterPresent(): any {
    console.log('2');
    return this.ageType !== 'everyone';
  }
  doesExternalFilterPass(node): any{
   console.log(this.ageType);
   switch (this.ageType) {
      case 'below25':
        return node.data.age < 25;
      case 'between25and50':
        return node.data.age >= 25 && node.data.age <= 50;
      case 'above50':
        return node.data.age > 50;
      case 'dateAfter2008':
        return this.asDate(node.data.date) > new Date(2008, 1, 1);
      default:
        return true;
    }
  }

}
