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

    saveFilterModel(): void{
        const keys = Object.keys(this.gridApi.getFilterModel());
        const saveFilters = keys.length > 0 ? keys.join(', ') : '(none)';
        document.querySelector('#savedFilters').innerHTML = saveFilters;
    }

    restoreFilterModel(): void{
        this.gridApi.setFilterModel(this.gridApi.getFilterModel());
    }

    restoreFromHardCoded(): void{
        const hardcodedFilter = {
            country: {
                type: 'set',
                values: ['Ireland', 'United States'],
            },
            age: {
                type: 'lessThan',
                filter: '30',
            },
            athlete: {
                type: 'startsWith',
                filter: 'Mich',
            },
            date: {
                type: 'lessThan',
                dateFrom: '2010-01-01',
            },
        };
        this.gridApi.setFilterModel(hardcodedFilter);
    }

    clearFilters(): void{
        this.gridApi.setFilterModel(null);
    }

    destroyFilter(): void{
    }
}
