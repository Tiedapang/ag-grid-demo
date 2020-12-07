import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AgGridColumnsDemoComponent} from './ag-grid-columns-demo.component';

describe('AgGridDemoComponent', () => {
  let component: AgGridColumnsDemoComponent;
  let fixture: ComponentFixture<AgGridColumnsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridColumnsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridColumnsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
