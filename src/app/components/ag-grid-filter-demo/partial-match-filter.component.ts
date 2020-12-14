import {IFilterAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams, Promise, RowNode} from 'ag-grid-community';
import {Component, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-filter-cell',
    template: `
        <div class="container">
            Partial Match Filter:
            <input
                    #input
                    (ngModelChange)="onChange($event)"
                    [ngModel]="text"
                    class="form-control"
            />
        </div>
    `,
    styles: [
            `
            .container {
                border: 2px solid #22ff22;
                border-radius: 5px;
                background-color: #bbffbb;
                width: 200px;
                height: 50px;
            }

            input {
                height: 20px;
            }
        `,
    ],
})
export class PartialMatchFilterComponent implements IFilterAngularComp {
    params: IFilterParams;
    valueGetter: (rowNode: RowNode) => any;
    text = '';
    @ViewChild('input', { read: ViewContainerRef }) public input;

    setModel(model: any): void | Promise<void> {
        this.text = model ? model.value : '';
    }
    onNewRowsLoaded?(): void {
        throw new Error('Method not implemented.');
    }
    onAnyFilterChanged?(): void {
        throw new Error('Method not implemented.');
    }
    getFrameworkComponentInstance?(): void{
        throw new Error('Method not implemented.');
    }
    getModelAsString?(model: any): string {
        throw new Error('Method not implemented.');
    }
    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
        window.setTimeout(() => this.input.element.nativeElement.focus());
    }
    agInit(params: IFilterParams): void {
        this.params = params;
        this.valueGetter = params.valueGetter;
    }

    doesFilterPass(params: IDoesFilterPassParams): boolean {
        return this.text
            .toLowerCase()
            .split(' ')
            .every(
                (filterWord) =>
                    this.valueGetter(params.node)
                        .toString()
                        .toLowerCase()
                        .indexOf(filterWord) >= 0
            );
    }

    getModel(): any {
        return { value: this.text };
    }

    isFilterActive(): boolean {
        return this.text != null && this.text !== '';
    }

    onChange(newValue): void {
        if (this.text !== newValue) {
            this.text = newValue;
            this.params.filterChangedCallback();
        }
    }

}
