import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridExportFileDemoComponent } from './ag-grid-export-file-demo.component';

describe('AgGridExportFileDemoComponent', () => {
  let component: AgGridExportFileDemoComponent;
  let fixture: ComponentFixture<AgGridExportFileDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridExportFileDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridExportFileDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
