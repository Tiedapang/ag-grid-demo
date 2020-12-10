import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridCustomerComponmentsDemoComponent } from './ag-grid-customer-componments-demo.component';

describe('AgGridCustomerComponmentsDemoComponent', () => {
  let component: AgGridCustomerComponmentsDemoComponent;
  let fixture: ComponentFixture<AgGridCustomerComponmentsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridCustomerComponmentsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridCustomerComponmentsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
