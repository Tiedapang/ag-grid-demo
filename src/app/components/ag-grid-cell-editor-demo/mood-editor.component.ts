import {ICellEditorAngularComp} from 'ag-grid-angular';
import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {ICellEditorParams} from 'ag-grid-community';

@Component({
    selector: 'app-mood-editor',
    templateUrl: './mood-editor.component.html',
    styleUrls: ['./mood-editor.component.scss']
})

export class MoodEditorComponent implements ICellEditorAngularComp, AfterViewInit{
    params: any;

    @ViewChild(
        'container', {read: ViewContainerRef}
    )
    container: any;
    happy = false;

    agInit(params: ICellEditorParams): void {
        this.params =  params;
        this.setHappy(params.value === 'Happy');
    }

    getValue(): any {
        return this.happy ? 'Happy' : 'Sad';
    }

    ngAfterViewInit(): void {
        window.setTimeout(() => {
            this.container.element.nativeElement.focus();
        });
    }

    isPopup(): boolean {
        return true;
    }

    setHappy(happy: boolean): void{
        this.happy = happy;
    }

    onKeyDown(event: KeyboardEvent): any{
        const key = event.which || event.keyCode;
        if (
            key === 37 || // left
            key === 39
        ) {
            // right
            this.toggleMood();
            event.stopPropagation();
        }
    }

    onClick(happy: boolean): void{
        this.setHappy(happy);
        this.params.api.stopEditing();
    }

    toggleMood(): void{
        this.setHappy(!this.happy);
    }
}
