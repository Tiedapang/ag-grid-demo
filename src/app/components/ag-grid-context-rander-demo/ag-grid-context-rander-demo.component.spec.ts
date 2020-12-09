import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridContextRanderDemoComponent } from './ag-grid-context-rander-demo.component';

describe('AgGridContextRanderDemoComponent', () => {
  let component: AgGridContextRanderDemoComponent;
  let fixture: ComponentFixture<AgGridContextRanderDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridContextRanderDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridContextRanderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
