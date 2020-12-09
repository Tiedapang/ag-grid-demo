import {Component, OnInit} from '@angular/core';
import {ColumnApi, GridApi} from 'ag-grid-community';
import {GridDataServiceService} from '../service/grid-data-service.service';

@Component({
    selector: 'app-ag-grid-column-filter-demo',
    templateUrl: './ag-grid-column-filter-demo.component.html',
    styleUrls: ['./ag-grid-column-filter-demo.component.scss']
})
export class AgGridColumnFilterDemoComponent implements OnInit {
    gridApi: GridApi;
    gridColumnApi: ColumnApi;
    columnDefs: any;
    defaultColDef: any;
    rowData: [];

    constructor(private gridDataService: GridDataServiceService) {
        this.columnDefs = [
            {field: 'athlete'},
            {
                field: 'age',
                filter: 'agNumberColumnFilter',
                maxWidth: 100,
            },
            {field: 'country'},
            {
                field: 'year',
                maxWidth: 100,
            },
            {
                field: 'date',
                filter: 'agDateColumnFilter',
                // filterParams: filterParams,
            },
            {field: 'sport'},
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
            {
                field: 'total',
                filter: false,
            },
        ];
        this.defaultColDef = {
            flex: 1,
            minWidth: 150,
            filter: true,
        };
    }

    ngOnInit(): void {
    }

    onGridReady(params: any): void{
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridDataService.getBigNumbersOfRowDatas().subscribe((data) => {
            this.rowData = data;
        });
    }
}
