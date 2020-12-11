import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
    template: `
        <input placeholder="请输入您的话"/>
    `,
    styles: [`
        ag-ratio {
            height:30px;
            margin: 5px;
            display: block;
            overflow: hidden;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #fff;
        }
    `]
})
export class RatioParentComponent implements ICellRendererAngularComp {
    public params: any = {
        value: {top: 0.25, bottom: 0.75}
    };

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return false;
    }
}
