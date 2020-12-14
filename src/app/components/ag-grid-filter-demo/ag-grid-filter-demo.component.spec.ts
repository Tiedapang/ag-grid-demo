import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridFilterDemoComponent } from './ag-grid-filter-demo.component';

describe('AgGridFilterDemoComponent', () => {
  let component: AgGridFilterDemoComponent;
  let fixture: ComponentFixture<AgGridFilterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridFilterDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridFilterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
