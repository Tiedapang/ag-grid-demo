import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridAddComponmentsDemoComponent } from './ag-grid-add-componments-demo.component';

describe('AgGridAddComponmentsDemoComponent', () => {
  let component: AgGridAddComponmentsDemoComponent;
  let fixture: ComponentFixture<AgGridAddComponmentsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridAddComponmentsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridAddComponmentsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
