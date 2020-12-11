import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCellEditorDemoComponent } from './ag-grid-cell-editor-demo.component';

describe('AgGridCellEditorDemoComponent', () => {
  let component: AgGridCellEditorDemoComponent;
  let fixture: ComponentFixture<AgGridCellEditorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridCellEditorDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridCellEditorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
