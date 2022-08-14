import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STUserHomeComponent } from './stuser-home.component';

describe('STUserHomeComponent', () => {
  let component: STUserHomeComponent;
  let fixture: ComponentFixture<STUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STUserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
