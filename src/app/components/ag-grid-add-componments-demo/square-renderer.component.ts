import { Component, OnDestroy } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
@Component({
    template: `{{ valueSquared() }}`,
})
export class SquareRendererComponent implements ICellRendererAngularComp, OnDestroy {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public valueSquared(): number {
        return this.params.value * this.params.value;
    }

    ngOnDestroy(): void{
        console.log(`Destroying SquareComponent`);
    }

    refresh(): boolean {
        return false;
    }
}
