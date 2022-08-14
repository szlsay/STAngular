import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STOrderHomeComponent } from './storder-home.component';

describe('STOrderHomeComponent', () => {
  let component: STOrderHomeComponent;
  let fixture: ComponentFixture<STOrderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STOrderHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STOrderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
