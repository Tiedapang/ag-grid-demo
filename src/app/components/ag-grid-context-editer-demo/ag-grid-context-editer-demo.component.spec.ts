import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridContextEditerDemoComponent } from './ag-grid-context-editer-demo.component';

describe('AgGridContextEditerDemoComponent', () => {
  let component: AgGridContextEditerDemoComponent;
  let fixture: ComponentFixture<AgGridContextEditerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridContextEditerDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridContextEditerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
