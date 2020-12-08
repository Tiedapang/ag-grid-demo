import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridRowsDemoComponent } from './ag-grid-rows-demo.component';

describe('AgGridRowsDemoComponent', () => {
  let component: AgGridRowsDemoComponent;
  let fixture: ComponentFixture<AgGridRowsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridRowsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridRowsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
