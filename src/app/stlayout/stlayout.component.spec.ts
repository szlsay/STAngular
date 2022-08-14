import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STLayoutComponent } from './stlayout.component';

describe('STLayoutComponent', () => {
  let component: STLayoutComponent;
  let fixture: ComponentFixture<STLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
