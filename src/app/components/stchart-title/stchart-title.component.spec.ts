import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STChartTitleComponent } from './stchart-title.component';

describe('STChartTitleComponent', () => {
  let component: STChartTitleComponent;
  let fixture: ComponentFixture<STChartTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STChartTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STChartTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
