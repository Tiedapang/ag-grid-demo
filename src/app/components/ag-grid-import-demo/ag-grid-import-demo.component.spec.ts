import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridImportDemoComponent } from './ag-grid-import-demo.component';

describe('AgGridImportDemoComponent', () => {
  let component: AgGridImportDemoComponent;
  let fixture: ComponentFixture<AgGridImportDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridImportDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridImportDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
