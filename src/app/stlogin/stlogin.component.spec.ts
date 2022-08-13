import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STLoginComponent } from './stlogin.component';

describe('STLoginComponent', () => {
  let component: STLoginComponent;
  let fixture: ComponentFixture<STLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
