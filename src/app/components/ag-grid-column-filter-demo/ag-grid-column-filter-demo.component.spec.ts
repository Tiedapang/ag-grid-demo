import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridColumnFilterDemoComponent } from './ag-grid-column-filter-demo.component';

describe('AgGridColumnFilterDemoComponent', () => {
  let component: AgGridColumnFilterDemoComponent;
  let fixture: ComponentFixture<AgGridColumnFilterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridColumnFilterDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridColumnFilterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
