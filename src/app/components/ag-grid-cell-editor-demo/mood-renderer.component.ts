import { Component } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
    template: `
        <img width="20px" src="imgForMood">
    `,
    selector: 'app-mood-renderer'
})
export class MoodRendererComponent implements ICellRendererAngularComp{
    params: any;
    mood: string;
    imgForMood: string;

    agInit(params: ICellRendererParams): void {
        this.params = params;
        this.setMood(params);
    }

    refresh(params: any): boolean {
        this.params = params;
        this.setMood(params);
        return true;
    }

    setMood(params): void{
        this.mood = params.value;
        this.imgForMood = this.mood === 'Happy'
            ? 'https://www.ag-grid.com/images/smiley.png'
            : 'https://www.ag-grid.com/images/smiley-sad.png';
    }

}
