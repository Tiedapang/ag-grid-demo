import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridClientDataDemoComponent } from './ag-grid-client-data-demo.component';

describe('AgGridClientDataDemoComponent', () => {
  let component: AgGridClientDataDemoComponent;
  let fixture: ComponentFixture<AgGridClientDataDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridClientDataDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridClientDataDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
