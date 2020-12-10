import { Component } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
    template: `<span
    ><button
      style="height: 20px"
      (click)="invokeParentMethod()"
      class="btn btn-info"
    >
      Invoke Parent
    </button></span
  >`,
    styles: [
        `
      .btn {
        line-height: 0.5;
      }
    `,
    ],
})
// tslint:disable-next-line:component-class-suffix
export class ChildMessageRendererComponment implements ICellRendererAngularComp {
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod(): void{
        this.params.context.componentParent.methodFromParent(
            `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`
        );
    }

    refresh(): boolean {
        return false;
    }
}
