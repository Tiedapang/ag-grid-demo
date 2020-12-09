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
            {   field: 'athlete',
                filter: 'agTextColumnFilter',
                filterParams: {button: ['reset', 'apply']}
            },
            {
                field: 'age',
                filter: 'agNumberColumnFilter',
                filterParams: {button: ['reset', 'apply'], closeOnApply: true},
                maxWidth: 100,
            },
            {   field: 'country',
                filter: 'agSetColumnFilter',
                filterParams: {
                    buttons: ['clear', 'apply'],
                },
            },
            {
                field: 'year',
                maxWidth: 100,
                filter: 'agSetColumnFilter',
                filterParams: {
                    buttons: ['apply', 'cancel'],
                    closeOnApply: true,
                },
            },
            {
                field: 'date',
                filter: 'agDateColumnFilter',
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
            sortable: true
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

    resetAgeFilter(): void{
        const ageFilterInstance =  this.gridApi.getFilterInstance('age');
        ageFilterInstance.setModel({
            filterType: 'number',
            type: 'equals',
            filter: 15
        });
        this.gridApi.onFilterChanged();
    }
}
