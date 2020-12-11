import {ICellEditorAngularComp} from 'ag-grid-angular';
import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {ICellEditorParams} from 'ag-grid-community';

@Component({
    selector: 'app-numeric-cell',
    template: `<input
    #input
    (keydown)="onKeyDown($event)"
    [(ngModel)]="value"
    style="width: 100%"
  />`,
})
export class NumericEditorComponent implements ICellEditorAngularComp, AfterViewInit{
    params: any;
    value: number;
    highlightAllOnFocus = true;
    cancelBeforeStart = false;

    @ViewChild('input', { read: ViewContainerRef }) public input: any;

    agInit(params: ICellEditorParams): void {
    }

    getValue(): any {
    }

    ngAfterViewInit(): void {
    }


    onKeyDown(event: KeyboardEvent): void{
    }
}
