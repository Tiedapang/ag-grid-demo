import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridOutsideFilterDemoComponent } from './ag-grid-outside-filter-demo.component';

describe('AgGridOutsideFilterDemoComponent', () => {
  let component: AgGridOutsideFilterDemoComponent;
  let fixture: ComponentFixture<AgGridOutsideFilterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridOutsideFilterDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridOutsideFilterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
