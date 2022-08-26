import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STChartComponent } from './stchart.component';

describe('STChartComponent', () => {
  let component: STChartComponent;
  let fixture: ComponentFixture<STChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
